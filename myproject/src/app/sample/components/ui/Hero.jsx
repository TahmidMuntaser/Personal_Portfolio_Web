import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./Typewriter";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#020d19] px-4 py-16 text-white md:px-8 md:py-24 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-sm text-emerald-300">
            <span className="text-emerald-500">visitor@portfolio:~$</span> whoami
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Tahmid Muntaser
          </h1>

          <div className="mt-3">
            <Typewriter
              as="p"
              texts={[
                "Full-Stack Software Developer",
                "Backend & API Engineer",
                "Competitive Programmer",
              ]}
            />
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            I design and build reliable web applications from database to UI—focused on clean code, real-world utility, and performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/TAHMID_MUNTASER_SWE_CV.pdf"
              download="TAHMID_MUNTASER_SWE_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#04121b] transition-colors duration-150 hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-200"
            >
              <FaDownload className="h-3.5 w-3.5" aria-hidden="true" />
              Download CV
            </a>

            <Link
              href="#works"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-emerald-400/40 hover:text-emerald-200"
            >
              Selected Work
              <FaArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>

            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href="https://github.com/TahmidMuntaser"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors duration-150 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/tahmid-muntaser-518929230/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors duration-150 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://x.com/Tahmid_Muntaser"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors duration-150 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:ml-auto lg:mr-0">
          <div className="group relative aspect-[4/4.4] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#081720] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/tah234.png"
              alt="Tahmid Muntaser"
              fill
              priority
              sizes="(max-width: 1024px) 384px, 420px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;