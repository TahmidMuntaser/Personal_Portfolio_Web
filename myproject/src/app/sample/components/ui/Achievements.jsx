"use client";

import React from "react";
import { FaTrophy } from "react-icons/fa";

const Achievements = ({ achievements = [] }) => {
    return (
        <section
            id="achievements"
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
                        <span className="text-emerald-500">visitor@portfolio:~$</span> cat ./achievements
                        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                        Achievements
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
                        Hackathon finals and competitive placements built under tight deadlines.
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
                                ~/portfolio/achievements — zsh
                            </span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-500">
                            {achievements.length} {achievements.length === 1 ? "result" : "results"}
                        </span>
                    </div>

                    <div className="grid gap-4 p-5 md:grid-cols-3 md:p-6">
                        {achievements.map((achievement, index) => (
                            <article
                                key={achievement.event}
                                className="group flex flex-col rounded-xl border border-white/10 bg-[#050d15] p-5 transition-colors duration-200 hover:border-emerald-400/35 hover:bg-[#07131d]"
                            >
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                                        <FaTrophy className="text-base" aria-hidden="true" />
                                    </div>
                                    <span className="rounded-md border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-300">
                                        {achievement.badge}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-emerald-200 md:text-lg">
                                    {achievement.event}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    {achievement.description}
                                </p>

                                <p className="mt-auto pt-4 font-mono text-[11px] text-slate-500">
                                    {String(index + 1).padStart(2, "0")} // finalist
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
