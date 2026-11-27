"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaArrowUp } from 'react-icons/fa6';

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/TahmidMuntaser",
        icon: <FaGithub size={18} />
    },
    {
        name: "X",
        href: "https://x.com/Tahmid_Muntaser",
        icon: <FaXTwitter size={18} />
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/tahmid-muntaser-518929230/",
        icon: <FaLinkedinIn size={18} />
    }
];

const quickLinks = [
    { label: "Services", href: "/#services" },
    { label: "Education", href: "/#education" },
    { label: "Works", href: "/#works" },
    { label: "CP", href: "/#cp" },
    { label: "Skills", href: "/#skills" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Contact", href: "/#contact" }
];

const Footer = () => {
    const footerRef = useRef(null);
    const reduced = useReducedMotion();

    const handleMouseMove = (e) => {
        if (reduced || !footerRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        footerRef.current.style.setProperty("--fx", `${e.clientX - rect.left}px`);
        footerRef.current.style.setProperty("--fy", `${e.clientY - rect.top}px`);
    };

    const reveal = (delay = 0) =>
        reduced
            ? {}
            : {
                  initial: { opacity: 0, y: 14 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.25 },
                  transition: { duration: 0.45, delay, ease: "easeOut" },
              };

    return (
        <footer
            ref={footerRef}
            onMouseMove={handleMouseMove}
            className="group/footer relative overflow-hidden border-t border-white/10 bg-[#020d19] px-4 py-8 text-slate-400 md:px-8 lg:px-20"
        >
            {!reduced && (
                <>
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 top-0 h-px w-48 bg-gradient-to-r from-transparent via-emerald-400/75 to-transparent"
                        animate={{ x: ["-12rem", "100vw"] }}
                        transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/footer:opacity-100"
                        style={{
                            background:
                                "radial-gradient(340px circle at var(--fx, 50%) var(--fy, 0%), rgba(52, 211, 153, 0.08), transparent 70%)",
                        }}
                    />
                </>
            )}

            <div className="relative z-10 mx-auto max-w-7xl space-y-8">
                <motion.div
                    {...reveal(0)}
                    className="flex flex-col justify-between gap-8 md:flex-row md:items-start"
                >
                    <div className="max-w-xs space-y-3">
                        <a
                            href="/#resume"
                            className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-white transition-colors duration-150 hover:text-emerald-300"
                        >
                            <span className="text-emerald-400">&gt;_</span>
                            <span className="terminal-cursor">Tahmid Muntaser</span>
                        </a>
                        <p className="text-sm leading-6 text-slate-400">
                            Full-stack software developer building reliable web applications from database to UI.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation" className="space-y-3">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                            Navigation
                        </p>
                        <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="inline-block text-slate-400 transition-all duration-150 hover:translate-x-0.5 hover:text-emerald-300 motion-reduce:transition-none motion-reduce:hover:translate-x-0"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="space-y-3">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                            Connect
                        </p>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    {...reveal(0.1)}
                    className="flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p>© {new Date().getFullYear()} Tahmid Muntaser</p>
                    <a
                        href="/#resume"
                        className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-150 hover:text-emerald-300"
                    >
                        <FaArrowUp
                            size={12}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                        />
                        Back to top
                    </a>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
