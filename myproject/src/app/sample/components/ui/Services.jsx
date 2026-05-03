"use client";

import React from 'react';
import { FaGlobe, FaCode, FaServer, FaLaptopCode, FaDatabase, FaDocker, FaRobot, FaTrophy } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiDjango, SiNextdotjs, SiGithub } from "react-icons/si";

const Services = ({ services }) => {
    const iconMap = {
        1: <FaGlobe className="text-2xl text-teal-100" />,
        2: <FaCode className="text-2xl text-teal-100" />,
        3: <FaServer className="text-2xl text-teal-100" />,
        4: <FaLaptopCode className="text-2xl text-teal-100" />
    };

    const featuredTracks = [
        {
            title: "Full-Stack Product Builds",
            eyebrow: "End-to-end delivery",
            description: "Building complete web applications with Next.js, React, Django, and production-ready data flows.",
            icon: <FaGlobe className="text-2xl text-teal-100" />
        },
        {
            title: "Frontend Systems",
            eyebrow: "UI engineering",
            description: "Crafting responsive, user-focused interfaces with strong layout structure, interaction polish, and Tailwind-based styling.",
            icon: <FaCode className="text-2xl text-teal-100" />
        },
        {
            title: "Backend Architecture",
            eyebrow: "API and logic",
            description: "Designing secure APIs, server-side workflows, and maintainable backend systems with Django and Django REST Framework.",
            icon: <FaServer className="text-2xl text-teal-100" />
        },
        {
            title: "Data and Automation",
            eyebrow: "Pipelines and scale",
            description: "Working with scraping, caching, structured data, and database-backed features that support larger application workflows.",
            icon: <FaDatabase className="text-2xl text-teal-100" />
        },
        {
            title: "Problem Solving Mindset",
            eyebrow: "Competitive edge",
            description: "Applying strong algorithmic thinking, rapid iteration, and hackathon experience to turn rough ideas into working software fast.",
            icon: <FaTrophy className="text-2xl text-teal-100" />
        }
    ];

    const offerItems = [
        {
            title: "Full-Stack Apps",
            description: "Full-stack web application development using Next.js, React.js, Django, and PostgreSQL.",
            icon: <SiNextdotjs className="text-xl text-cyan-200" />
        },
        {
            title: "REST API Systems",
            description: "REST API development and backend system design with Django REST Framework.",
            icon: <SiDjango className="text-xl text-cyan-200" />
        },
        {
            title: "Responsive Frontend",
            description: "Responsive and user-focused frontend development with Tailwind CSS.",
            icon: <SiTailwindcss className="text-xl text-cyan-200" />
        },
        {
            title: "Scalable Platforms",
            description: "Scalable data-driven platforms with filtering, comparison, and real-time features.",
            icon: <FaServer className="text-xl text-cyan-200" />
        },
        {
            title: "Automation Pipelines",
            description: "Web scraping, automation, and caching solutions for large-scale data collection.",
            icon: <FaRobot className="text-xl text-cyan-200" />
        },
        {
            title: "AI Workflows",
            description: "AI-integrated application workflows and interactive problem-solving platforms.",
            icon: <FaCode className="text-xl text-cyan-200" />
        },
        {
            title: "Database Design",
            description: "Database design and management using PostgreSQL and SQLite.",
            icon: <FaDatabase className="text-xl text-cyan-200" />
        },
        {
            title: "Dev Workflow",
            description: "Clean, maintainable code with Git, GitHub, and Docker-based workflows.",
            icon: <FaDocker className="text-xl text-cyan-200" />
        },
        {
            title: "Competitive Problem Solving",
            description: "Strong problem-solving skills backed by 1300+ competitive programming problems solved.",
            icon: <FaTrophy className="text-xl text-cyan-200" />
        },
        {
            title: "Team Collaboration",
            description: "Team collaboration and rapid prototyping experience through national-level hackathons.",
            icon: <SiGithub className="text-xl text-cyan-200" />
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
                                What I Offer
                            </p>
                            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                                Engineering modern products with a
                                <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                                    strong tech stack and a problem-solver mindset.
                                </span>
                            </h2>
                            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                                From full-stack apps to backend systems, automation, AI workflows, and fast prototypes, I build software that is practical, scalable, and cleanly engineered.
                            </p>
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

                <div className="mb-8 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
                    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
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
                        <p className="mb-5 text-xs uppercase tracking-[0.32em] text-cyan-100/60">
                            Core Tracks
                        </p>
                        <div className="mb-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] px-4 py-4">
                            <p className="font-mono text-sm text-cyan-100/70">
                                <span className="text-emerald-300">$</span> scan capabilities --focus engineering
                            </p>
                            <p className="mt-3 text-sm leading-6 text-slate-300">
                                A focused snapshot of how I build, ship, and solve problems across the stack.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {featuredTracks.map((service, index) => (
                                <div
                                    key={service.title}
                                    className="group rounded-2xl border border-white/8 bg-black/20 px-4 py-4 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.05]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10">
                                            {service.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/55">
                                                        {service.eyebrow}
                                                    </p>
                                                    <h3 className="mt-1 text-lg font-semibold text-white">{service.title}</h3>
                                                </div>
                                                <span className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-2 py-1 font-mono text-[11px] text-cyan-100/45">
                                                    TRK-{String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-slate-300">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7">
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/60">
                                Capability Matrix
                            </p>
                            <p className="text-xs text-slate-400">10 items loaded</p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {offerItems.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#081720] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                                >
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent"></div>
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10">
                                            {item.icon}
                                        </span>
                                        <span className="font-mono text-xs text-cyan-100/45">
                                            [{String(index + 1).padStart(2, "0")}]
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                    <p className="mt-2 text-sm leading-6 text-slate-300">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Frontend</p>
                        <p className="mt-3 text-white">React, Next.js, Tailwind</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Backend</p>
                        <p className="mt-3 text-white">Django, DRF, APIs</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Data</p>
                        <p className="mt-3 text-white">PostgreSQL, SQLite, caching</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">Build Style</p>
                        <p className="mt-3 text-white">Clean code, automation, speed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
