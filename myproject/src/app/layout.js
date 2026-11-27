import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tahmid Muntaser — Full-Stack Software Engineer",
  description:
    "Full-stack software developer specializing in Next.js, React, Django, and PostgreSQL. Explore selected projects, competitive programming profiles, and engineering work.",
  keywords: [
    "Tahmid Muntaser",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Django",
    "Competitive Programming",
  ],
  openGraph: {
    title: "Tahmid Muntaser — Full-Stack Software Engineer",
    description:
      "Full-stack software developer specializing in Next.js, React, Django, and PostgreSQL.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmid Muntaser — Full-Stack Software Engineer",
    description:
      "Full-stack software developer specializing in Next.js, React, Django, and PostgreSQL.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
