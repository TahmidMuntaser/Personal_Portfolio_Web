import { createHmac, timingSafeEqual } from "node:crypto";
import { resolve4, resolveMx } from "node:dns/promises";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const VERIFICATION_WINDOW_MS = 10 * 60 * 1000;
const MIN_FORM_FILL_TIME_MS = 3000;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requestsByIp = new Map();

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return "unknown";
}

function sanitize(value) {
  return value?.toString().trim() ?? "";
}

function createVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function formatExpiryTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(timestamp));
}

function getVerificationSecret() {
  return process.env.CONTACT_VERIFICATION_SECRET || process.env.EMAIL_HOST_PASSWORD || "";
}

function signValue(value) {
  return createHmac("sha256", getVerificationSecret()).update(value).digest("hex");
}

function createVerificationToken(payload) {
  const serializedPayload = JSON.stringify(payload);
  const encodedPayload = Buffer.from(serializedPayload, "utf8").toString("base64url");
  const signature = signValue(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

function verifyVerificationToken(token) {
  if (!token || !token.includes(".")) {
    return null;
  }

  const [encodedPayload, signature] = token.split(".");
  const expectedSignature = signValue(encodedPayload);

  const providedBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expectedSignature, "utf8");

  if (providedBuffer.length !== expectedBuffer.length) {
    return null;
  }

  if (!timingSafeEqual(providedBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const serializedPayload = Buffer.from(encodedPayload, "base64url").toString("utf8");
    return JSON.parse(serializedPayload);
  } catch {
    return null;
  }
}

function isRateLimited(ipAddress) {
  const now = Date.now();
  const recentRequests = (requestsByIp.get(ipAddress) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    requestsByIp.set(ipAddress, recentRequests);
    return {
      limited: true,
      retryAfterMs: RATE_LIMIT_WINDOW_MS - (now - recentRequests[0])
    };
  }

  recentRequests.push(now);
  requestsByIp.set(ipAddress, recentRequests);
  return {
    limited: false,
    retryAfterMs: 0
  };
}

function createTransporter() {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const useTls = String(process.env.EMAIL_USE_TLS).toLowerCase() === "true";
  const user = process.env.EMAIL_HOST_USER;
  const pass = process.env.EMAIL_HOST_PASSWORD;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: false,
    requireTLS: useTls,
    auth: {
      user,
      pass
    }
  });
}

async function hasDeliverableEmailDomain(email) {
  const domain = email.split("@")[1]?.toLowerCase();

  if (!domain) {
    return false;
  }

  try {
    const mxRecords = await resolveMx(domain);

    if (mxRecords.length > 0) {
      return true;
    }
  } catch {}

  try {
    const aRecords = await resolve4(domain);
    return aRecords.length > 0;
  } catch {
    return false;
  }
}

async function sendWithResend({ toEmail, fromEmail, fromName, replyTo, subject, text }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: `"${fromName}" <${fromEmail}>`,
      to: [toEmail],
      reply_to: replyTo,
      subject,
      text
    })
  });

  if (!response.ok) {
    const errorPayload = await response.text();
    throw new Error(`Resend error: ${errorPayload}`);
  }
}

async function sendWithSmtp({ toEmail, replyTo, subject, text, fromName }) {
  const transporter = createTransporter();

  if (!transporter) {
    throw new Error("SMTP transporter is not configured.");
  }

  await transporter.sendMail({
    from: `"${fromName}" <${process.env.EMAIL_HOST_USER}>`,
    to: toEmail,
    replyTo,
    subject,
    text
  });
}

async function sendEmail({ toEmail, replyTo, subject, text, fromName }) {
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (process.env.RESEND_API_KEY && fromEmail) {
    await sendWithResend({
      toEmail,
      fromEmail,
      fromName,
      replyTo,
      subject,
      text
    });
    return;
  }

  await sendWithSmtp({
    toEmail,
    replyTo,
    subject,
    text,
    fromName
  });
}

function buildOwnerMessage({ firstName, lastName, email, phone, message }) {
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  return {
    subject: `Portfolio contact from ${fullName || firstName}`,
    text: [
      `Name: ${fullName || firstName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Message:",
      message
    ].join("\n")
  };
}

function formatRetryDelay(retryAfterMs) {
  const totalSeconds = Math.max(1, Math.ceil(retryAfterMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes === 0) {
    return `${seconds} second${seconds === 1 ? "" : "s"}`;
  }

  if (seconds === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  return `${minutes} minute${minutes === 1 ? "" : "s"} ${seconds} second${seconds === 1 ? "" : "s"}`;
}

function validateMessageInput({ firstName, email, message, formStartedAt, now }) {
  if (!firstName || !email || !message) {
    return "First name, email, and message are required.";
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!Number.isFinite(formStartedAt) || now - formStartedAt < MIN_FORM_FILL_TIME_MS) {
    return "Form submitted too quickly. Please try again.";
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return "Message is too long.";
  }

  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const action = sanitize(body.action) || "request_code";
    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const message = sanitize(body.message);
    const website = sanitize(body.website);
    const verificationCode = sanitize(body.verificationCode);
    const verificationToken = sanitize(body.verificationToken);
    const formStartedAt = Number(body.formStartedAt);
    const ipAddress = getClientIp(request);
    const now = Date.now();

    if (website) {
      return NextResponse.json({ success: true });
    }

    const inputError = validateMessageInput({
      firstName,
      email,
      message,
      formStartedAt,
      now
    });

    if (inputError) {
      return NextResponse.json({ error: inputError }, { status: 400 });
    }

    if (!(await hasDeliverableEmailDomain(email))) {
      return NextResponse.json(
        { error: "Please use a real email address with a valid mail domain." },
        { status: 400 }
      );
    }

    const rateLimitResult = isRateLimited(ipAddress);

    if (rateLimitResult.limited) {
      return NextResponse.json(
        {
          error: `Too many messages from this network. Please try again in about ${formatRetryDelay(rateLimitResult.retryAfterMs)}.`,
          retryAfterMs: rateLimitResult.retryAfterMs
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(rateLimitResult.retryAfterMs / 1000))
          }
        }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromName = process.env.CONTACT_FROM_NAME || "Portfolio Contact";

    if (!toEmail) {
      return NextResponse.json(
        { error: "Contact form email is not configured on the server yet." },
        { status: 500 }
      );
    }

    if (action === "request_code") {
      const code = createVerificationCode();
      const expiresAt = now + VERIFICATION_WINDOW_MS;
      const token = createVerificationToken({
        code,
        expiresAt,
        payload: {
          firstName,
          lastName,
          email,
          phone,
          message
        }
      });

      await sendEmail({
        toEmail: email,
        replyTo: toEmail,
        subject: "Your verification code",
        text: [
          `Hi ${firstName},`,
          "",
          "Use the verification code below to confirm your email address and send your message:",
          code,
          "",
          `This code expires in 10 minutes, around ${formatExpiryTime(expiresAt)}.`
        ].join("\n"),
        fromName
      });

      return NextResponse.json({
        success: true,
        requiresVerification: true,
        verificationToken: token,
        message: "We sent a verification code to your email. Enter it below to finish sending."
      });
    }

    if (action !== "verify_code") {
      return NextResponse.json(
        { error: "Unsupported action." },
        { status: 400 }
      );
    }

    const decodedToken = verifyVerificationToken(verificationToken);

    if (!decodedToken) {
      return NextResponse.json(
        { error: "Verification expired. Please request a new code." },
        { status: 400 }
      );
    }

    if (decodedToken.expiresAt < now) {
      return NextResponse.json(
        { error: "Verification code expired. Please request a new code." },
        { status: 400 }
      );
    }

    if (decodedToken.payload?.email?.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json(
        { error: "Verification session mismatch. Please request a new code." },
        { status: 400 }
      );
    }

    if (decodedToken.code !== verificationCode) {
      return NextResponse.json(
        { error: "Incorrect verification code." },
        { status: 400 }
      );
    }

    const ownerMessage = buildOwnerMessage(decodedToken.payload);

    await sendEmail({
      toEmail,
      replyTo: decodedToken.payload.email,
      subject: ownerMessage.subject,
      text: ownerMessage.text,
      fromName
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
