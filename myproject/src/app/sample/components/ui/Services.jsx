"use client";

import React from 'react';
import { FaGlobe, FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            title: "Full-Stack Development",
            description: "Scalable web applications with Next.js, React, Django, and REST APIs.",
            icon: <FaGlobe className="text-xl text-emerald-300" />
        },
        {
            title: "SaaS & Multi-Tenant Systems",
            description: "Building scalable SaaS platforms with multi-tenant architecture.",
            icon: <FaCode className="text-xl text-emerald-300" />
        },
        {
            title: "API & SDK Development",
            description: "Reliable APIs and developer-friendly SDKs for modern applications.",
            icon: <FaServer className="text-xl text-emerald-300" />
        },
        {
            title: "Automation & Integrations",
            description: "Scraping, scheduled workflows, and third-party service integrations.",
            icon: <FaDatabase className="text-xl text-emerald-300" />
        },
        {
            title: "DevOps & Deployment",
            description: "Docker, CI/CD workflows, containerized applications, and deployments.",
            icon: <FaCloud className="text-xl text-emerald-300" />
        },
        {
            title: "Database & Data Systems",
            description: "Designing structured data models, databases, caching, and data-driven workflows.",
            icon: <FaServer className="text-xl text-emerald-300" />
        }
    ];

    return (
        <section
            id='services'
            className="relative overflow-hidden bg-[#020d19] px-4 py-16 md:px-8 md:py-20 lg:px-20 scroll-mt-40"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                    backgroundSize: "34px 34px"
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="font-mono text-sm text-emerald-300">
                        <span className="text-emerald-500">visitor@portfolio:~$</span> cat ./services
                        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                        What I Do
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
                        End-to-end engineering built for clarity, reliability, and scale.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081720] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                    <div className="flex items-center justify-between border-b border-white/10 bg-black/25 px-4 py-2.5">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5" aria-hidden="true">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <span className="font-mono text-xs text-slate-400">
                                ~/portfolio/capabilities — zsh
                            </span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-500">
                            {services.length} modules
                        </span>
                    </div>

                    <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 md:p-6">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="group rounded-xl border border-white/10 bg-[#050d15] p-5 transition-colors duration-200 hover:border-emerald-400/35 hover:bg-[#07131d]"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
                                        {service.icon}
                                    </div>
                                    <span className="font-mono text-[11px] text-slate-500">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-emerald-200 md:text-lg">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-xs leading-5 text-slate-400 md:text-sm md:leading-6">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
