"use client";

import React, { useMemo, useState } from 'react';
import WorkCard from './WorkCard';
import ProjectDetail from './ProjectDetail';

const Works = ({ projects = [] }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTag, setActiveTag] = useState('All');

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Most-used technologies become filter buttons
    const tags = useMemo(() => {
        const counts = {};
        projects.forEach((p) => (p.tags || []).forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
        return ['All', ...Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 6)];
    }, [projects]);

    const visible = activeTag === 'All' ? projects : projects.filter((p) => (p.tags || []).includes(activeTag));

    return (
        <section
            id="works"
            className="relative scroll-mt-40 overflow-hidden bg-[#020d19] px-4 py-20 md:px-8 md:py-24 lg:px-20"
        >
            {/* subtle grid + glow, same vibe as the rest of the site */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
                    backgroundSize: '34px 34px',
                }}
            />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 max-w-2xl">
                    <p className="font-mono text-sm text-emerald-300">
                        <span className="text-emerald-500">$</span> ls ./projects
                        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Selected Work</h2>
                    <p className="mt-4 text-base leading-7 text-slate-400">
                        {String(projects.length).padStart(2, '0')} full-stack projects built with React, Next.js, Django and PostgreSQL.
                        Each one is live and deployed. Click a card for details.
                    </p>
                </div>

                {/* Simple filter */}
                {tags.length > 2 && (
                    <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by technology">
                        <span className="mr-1 font-mono text-xs text-slate-500">filter:</span>
                        {tags.map((tag) => {
                            const on = tag === activeTag;
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    aria-pressed={on}
                                    onClick={() => setActiveTag(tag)}
                                    className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 ${
                                        on
                                            ? 'border-emerald-400 bg-emerald-400 font-semibold text-[#04121b]'
                                            : 'border-white/15 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300'
                                    }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Project grid: everything visible, no hidden scrolling */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((project, index) => (
                        <WorkCard
                            key={project.id}
                            {...project}
                            index={index}
                            onProjectClick={handleProjectClick}
                        />
                    ))}
                </div>

                {visible.length === 0 && (
                    <p className="py-10 text-center font-mono text-sm text-slate-500">No projects match this filter.</p>
                )}
            </div>

            <ProjectDetail project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default Works;