import React from "react";
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
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden px-6 pb-10 pt-20 text-gray-300 md:px-16 lg:px-20">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_30%)]"></div>

            <div className="relative mx-auto max-w-7xl">
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#07141c]/90 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-8">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                            <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                            <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-100/45">
                            footer.sys
                        </p>
                    </div>

                    <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-10">
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                                Tahmid Muntaser
                            </p>
                            <h3 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
                                Building clean, practical software
                                <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                                    with a strong engineering mindset.
                                </span>
                            </h3>
                            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
                                Clean, practical software built to last.
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
                            <div>
                                <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-100/55">
                                    Quick Links
                                </p>
                                <div className="flex flex-col gap-3">
                                    {quickLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="inline-flex items-center text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-200"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:justify-self-end">
                                <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-100/55">
                                    Connect
                                </p>
                                <div className="flex flex-wrap gap-3 sm:justify-end">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.name}
                                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-100 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-300/15 hover:text-white"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
                        <p>
                            © {new Date().getFullYear()} Tahmid Muntaser. All rights reserved.
                        </p>
                        <a
                            href="#resume"
                            className="inline-flex items-center gap-2 text-cyan-200 transition-colors duration-300 hover:text-white"
                        >
                            <FaArrowUp size={14} />
                            Back to top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
