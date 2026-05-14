"use client";

import React from 'react';
import { FaGlobe, FaCode, FaServer, FaDatabase, FaTrophy } from "react-icons/fa";

const Services = () => {
    const featuredTracks = [
        {
            title: "Full-Stack Product Builds",
            eyebrow: "Delivery",
            description: "Full-stack applications with Next.js, React, and Django.",
            icon: <FaGlobe className="text-2xl text-cyan-200" />
        },
        {
            title: "Frontend Systems",
            eyebrow: "UI",
            description: "Clean, responsive interfaces with Tailwind.",
            icon: <FaCode className="text-2xl text-cyan-200" />
        },
        {
            title: "Backend Architecture",
            eyebrow: "APIs",
            description: "Secure APIs and maintainable backend logic.",
            icon: <FaServer className="text-2xl text-cyan-200" />
        },
        {
            title: "Data and Automation",
            eyebrow: "Data",
            description: "Scraping, caching, and structured workflows.",
            icon: <FaDatabase className="text-2xl text-cyan-200" />
        },
        {
            title: "Problem Solving Mindset",
            eyebrow: "Mindset",
            description: "Fast iteration and strong problem solving.",
            icon: <FaTrophy className="text-2xl text-cyan-200" />
        }
    ];

    return (
        <section
            id='services'
            className="relative overflow-hidden px-4 py-20 md:px-8 md:py-24 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_rgba(2,13,25,1)_0%,_rgba(4,19,27,1)_35%,_rgba(2,13,25,1)_100%)]"
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
                {/* Terminal header card */}
                <div className="mb-10 overflow-hidden rounded-[34px] border border-cyan-400/15 bg-[#06131b]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm md:mb-14">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                            <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                            <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
                            services.exe
                        </p>
                    </div>

                    <div className="grid gap-8 px-5 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-7 md:py-9">
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                                Services
                            </p>
                            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                                Modern products with a
                                <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                                    strong stack and a problem-solver mindset.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">Primary stack</p>
                                <p className="mt-3 text-lg font-semibold text-white">Next.js, React, Django</p>
                            </div>
                            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">Databases</p>
                                <p className="mt-3 text-lg font-semibold text-white">PostgreSQL, SQLite</p>
                            </div>
                            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">Workflow</p>
                                <p className="mt-3 text-lg font-semibold text-white">Git, GitHub, Docker</p>
                            </div>
                            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">Problem solving</p>
                                <p className="mt-3 text-lg font-semibold text-white">1300+ problems solved</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Tracks panel */}
                <div className="mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span>
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-100/45">
                            core-tracks.log
                        </p>
                    </div>

                    <div className="p-6 md:p-7">
                        {/* Terminal prompt */}
                        <div className="mb-6 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] px-4 py-4">
                            <p className="font-mono text-sm text-cyan-100/70">
                                <span className="text-emerald-300">$</span> scan capabilities
                            </p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/60">
                                Core Tracks
                            </p>
                            <p className="text-xs text-slate-400">{featuredTracks.length} items loaded</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredTracks.map((service, index) => (
                                <div
                                    key={service.title}
                                    className="group rounded-2xl border border-white/8 bg-black/20 px-5 py-5 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.05]"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10">
                                            {service.icon}
                                        </div>
                                        <span className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-2 py-1 font-mono text-[11px] text-cyan-100/45">
                                            TRK-{String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/55 mb-1.5">
                                        {service.eyebrow}
                                    </p>
                                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                    
                                    <p className="text-xs leading-5 text-slate-300 md:text-sm md:leading-6">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom stat bar */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Delivery</p>
                        <p className="mt-3 text-white text-sm">On time, clearly</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Quality</p>
                        <p className="mt-3 text-white text-sm">Clean code, ready to ship</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Support</p>
                        <p className="mt-3 text-white text-sm">Easy to improve later</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Outcome</p>
                        <p className="mt-3 text-white text-sm">Simple, useful products</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
