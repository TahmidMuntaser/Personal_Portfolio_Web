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
    { label: "Services", href: "/#services" },
    { label: "Education", href: "/#education" },
    { label: "Works", href: "/#works" },
    { label: "CP", href: "/#cp" },
    { label: "Skills", href: "/#skills" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Contact", href: "/#contact" }
];

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#020d19] px-4 py-8 text-slate-400 md:px-8 lg:px-20">
            <div className="mx-auto max-w-7xl space-y-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <a
                        href="/#resume"
                        className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-white transition-colors duration-150 hover:text-emerald-300"
                    >
                        <span className="text-emerald-400">&gt;_</span>
                        <span>Tahmid Muntaser</span>
                    </a>

                    <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        {quickLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-slate-400 transition-colors duration-150 hover:text-emerald-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors duration-150 hover:border-emerald-400/40 hover:text-emerald-300"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Tahmid Muntaser</p>
                    <a
                        href="/#resume"
                        className="inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-150 hover:text-emerald-300"
                    >
                        <FaArrowUp size={12} aria-hidden="true" />
                        Back to top
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
