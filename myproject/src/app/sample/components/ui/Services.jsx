"use client";

import React from 'react';
import { FaGlobe, FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            title: "Full-Stack Development",
            description: "Scalable web applications with Next.js, React, Django, and REST APIs.",
            icon: <FaGlobe className="text-2xl text-cyan-200" />
        },
        {
            title: "SaaS & Multi-Tenant Systems",
            description: "Building scalable SaaS platforms with multi-tenant architecture.",
            icon: <FaCode className="text-2xl text-cyan-200" />
        },
        {
            title: "API & SDK Development",
            description: "Reliable APIs and developer-friendly SDKs for modern applications.",
            icon: <FaServer className="text-2xl text-cyan-200" />
        },
        {
            title: "Automation & Integrations",
            description: "Scraping, scheduled workflows, and third-party service integrations.",
            icon: <FaDatabase className="text-2xl text-cyan-200" />
        },
        {
            title: "DevOps & Deployment",
            description: "Docker, CI/CD workflows, containerized applications, and deployments.",
            icon: <FaCloud className="text-2xl text-cyan-200" />
        },
        {
            title: "Database & Data Systems",
            description: "Designing structured data models, databases, caching, and data-driven workflows.",
            icon: <FaServer className="text-2xl text-cyan-200" />
        }
    ];

    return (
        <section
            id='services'
            className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_rgba(2,13,25,1)_0%,_rgba(4,19,27,1)_35%,_rgba(2,13,25,1)_100%)]"
        >
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.09) 1px, transparent 1px)",
                    backgroundSize: "34px 34px"
                }}
            ></div>
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-cyan-300/10 to-transparent pointer-events-none"></div>
            <div className="absolute left-[-5rem] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none"></div>
            <div className="absolute right-[-4rem] bottom-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="mb-10 md:mb-14">
                    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                        Services
                    </p>
                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        What I do.
                        <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                            Built for clarity, speed, and scale.
                        </span>
                    </h2>
                </div>

                <div className="mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <div className="p-6 md:p-7">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/60">
                                Capabilities
                            </p>
                            <p className="text-xs text-slate-400">{services.length} services</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="group rounded-2xl border border-white/8 bg-black/20 px-5 py-5 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.05]"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                    </div>
                                    <p className="text-xs leading-5 text-slate-300 md:text-sm md:leading-6">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
