"use client";

import React, { useRef, useState } from "react";
import CustomButton from './Button';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contactFormRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [verificationCode, setVerificationCode] = useState("");
  const [pendingPayload, setPendingPayload] = useState(null);
  const [verificationToken, setVerificationToken] = useState("");

  const resetVerification = () => {
    setVerificationCode("");
    setPendingPayload(null);
    setVerificationToken("");
    setStatus({ type: "", message: "" });
    setFormStartedAt(Date.now());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: formData.get("firstName")?.toString().trim() ?? "",
      lastName: formData.get("lastName")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
      website: formData.get("website")?.toString() ?? "",
      formStartedAt
    };

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "request_code",
          ...payload
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus({
        type: "success",
        message: result.message || "We sent a verification code to your email."
      });
      setPendingPayload(payload);
      setVerificationToken(result.verificationToken || "");
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your message right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerificationSubmit = async (event) => {
    event.preventDefault();

    if (!pendingPayload) {
      setStatus({
        type: "error",
        message: "Please submit the form first."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "verify_code",
          ...pendingPayload,
          verificationCode,
          verificationToken
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Verification failed. Please try again.");
      }

      resetVerification();
      setFormStartedAt(Date.now());
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon."
      });
      contactFormRef.current?.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to verify your email right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-14 lg:px-20 scroll-mt-32 bg-[#020D19] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07141c]/90 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400"></span>
              <span className="h-3 w-3 rounded-full bg-amber-300"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-100/45 sm:block">contact-terminal.sh</p>
          </div>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent leading-tight">Contact</h2>
              <p className="mt-3 text-base md:text-lg text-slate-300 max-w-xl">If you have a question, or just want to say hi - drop a message.</p>

              <div className="mt-6 font-mono text-base md:text-lg text-slate-300 bg-[#06141a] border border-emerald-600/5 rounded-lg p-5 md:p-6">
                <p className="text-emerald-300 text-base md:text-lg">$ cat contact.txt</p>
                <p className="mt-3"><span className="text-teal-300">Phone:</span> <span className="text-white font-medium">+880 1643 372506</span></p>
                <p className="mt-2"><span className="text-teal-300">Email:</span> <span className="text-white font-medium break-words">tahmidmuntaser80@gmail.com</span></p>
                <p className="mt-2"><span className="text-teal-300">Location:</span> <span className="text-white font-medium">Mirpur-12, Dhaka, Bangladesh</span></p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <CustomButton href="#contact" className="px-6 py-3">Hire Me</CustomButton>
                <a href="mailto:tahmidmuntaser80@gmail.com" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"><FaEnvelope className="text-emerald-400"/> Email me</a>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-400">
                Fields marked with <span className="text-rose-300">*</span> are required
              </p>

              <form ref={contactFormRef} onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="firstName" placeholder="First name *" className="bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
                  <input name="lastName" placeholder="Last name" className="bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>

                <input name="email" type="email" placeholder="Email *" className="w-full bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" required />

                <input name="phone" type="tel" placeholder="Phone" className="w-full bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />

                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <textarea name="message" rows={5} placeholder="Message *" className="w-full bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" required />

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </div>

                {status.message ? (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-emerald-300" : "text-rose-300"
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>

          {pendingPayload ? (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#020D19]/80 p-5 backdrop-blur-md">
              <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#06141a] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="mb-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-200/60">
                    Email Verification
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Enter OTP Code</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    We sent a 6-digit code to <span className="text-white">{pendingPayload.email}</span>. Enter it here to confirm the email and send your message.
                  </p>
                </div>

                <form onSubmit={handleVerificationSubmit} className="space-y-4 font-mono">
                  <input
                    name="verificationCode"
                    value={verificationCode}
                    onChange={(event) => {
                      setVerificationCode(event.target.value);

                      if (status.type === "error") {
                        setStatus({ type: "", message: "" });
                      }
                    }}
                    placeholder="Verification code *"
                    className={`w-full rounded-md bg-transparent px-3 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      status.type === "error"
                        ? "border border-rose-400 focus:ring-rose-400"
                        : "border border-white/8 focus:ring-emerald-400"
                    }`}
                    required
                  />

                  {status.message ? (
                    <p
                      className={`text-sm ${
                        status.type === "success" ? "text-emerald-300" : "text-rose-300"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}

                  <p className="text-xs text-slate-400">
                    The code expires in 10 minutes.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Verifying..." : "Verify and send"}
                    </button>

                    <button
                      type="button"
                      onClick={resetVerification}
                      disabled={isSubmitting}
                      className="rounded-md border border-white/15 px-4 py-3 text-sm text-slate-300 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      Start over
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Contact;
