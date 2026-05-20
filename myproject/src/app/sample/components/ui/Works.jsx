"use client";

import React, { useState } from 'react';
import WorkCard from './WorkCard';
import ProjectDetail from './ProjectDetail';

const Works = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const getCardLayoutClass = (index) => {
        const remainder = projects.length % 3;
        const lastRowStart = projects.length - remainder;

        if (remainder === 1 && index === projects.length - 1) {
            return 'lg:col-start-3';
        }

        if (remainder === 2 && index >= lastRowStart) {
            return index === lastRowStart ? 'lg:col-start-2' : 'lg:col-start-4';
        }

        return '';
    };

    return (
        <section
            id="works"
            className="relative overflow-hidden px-4 py-20 md:px-8 md:py-24 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_rgba(2,13,25,1)_0%,_rgba(4,19,27,1)_35%,_rgba(2,13,25,1)_100%)]"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.09) 1px, transparent 1px)",
                    backgroundSize: "34px 34px"
                }}
            />
            {/* Glow orbs */}
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-emerald-300/8 to-transparent pointer-events-none" />
            <div className="absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
            <div className="absolute left-[-5rem] bottom-16 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                {/* Terminal header card */}
                <div className="mb-10 overflow-hidden rounded-[34px] border border-emerald-400/15 bg-[#06131b]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm md:mb-14">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-100/55">
                            projects.exe
                        </p>
                    </div>

                    <div className="grid gap-8 px-5 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-7 md:py-9">
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-200/80">
                                Recent Works
                            </p>
                            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                                Projects built with
                                <span className="block bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                                    passion and a strong stack.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">Total Projects</p>
                                <p className="mt-3 text-lg font-semibold text-white">{projects.length} Showcased</p>
                            </div>
                            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">Type</p>
                                <p className="mt-3 text-lg font-semibold text-white">Full-Stack Apps</p>
                            </div>
                            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">Stack</p>
                                <p className="mt-3 text-lg font-semibold text-white">React, Django, Next.js</p>
                            </div>
                            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">Status</p>
                                <p className="mt-3 text-lg font-semibold text-white">Live &amp; Deployed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects grid panel */}
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-100/45">
                            projects-index.log
                        </p>
                    </div>

                    <div className="p-6 md:p-7">
                        {/* Terminal prompt */}
                        <div className="mb-6 rounded-2xl border border-emerald-300/10 bg-emerald-300/[0.04] px-4 py-4">
                            <p className="font-mono text-sm text-emerald-100/70">
                                <span className="text-emerald-300">$</span> ls ./projects --sort=recent
                            </p>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-xs uppercase tracking-[0.32em] text-emerald-100/60">
                                Project Cards
                            </p>
                            <p className="text-xs text-slate-400">{projects.length} items loaded</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`lg:col-span-2 ${getCardLayoutClass(index)}`}
                                >
                                    <WorkCard
                                        {...project}
                                        index={index}
                                        onProjectClick={handleProjectClick}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom stat bar */}
                <div className="mt-4 grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/55">Click card</p>
                        <p className="mt-3 text-white text-sm">View full details</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/55">Gallery</p>
                        <p className="mt-3 text-white text-sm">Screenshots inside</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/55">Source</p>
                        <p className="mt-3 text-white text-sm">GitHub linked</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/55">Demo</p>
                        <p className="mt-3 text-white text-sm">Live preview</p>
                    </div>
                </div>
            </div>

            <ProjectDetail
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    );
};

export default Works;
