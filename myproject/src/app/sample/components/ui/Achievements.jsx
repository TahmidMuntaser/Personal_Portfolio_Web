"use client";

import React from "react";
import { FaTrophy } from "react-icons/fa";

const Achievements = ({ achievements }) => {
    return (
        <section
            id="achievements"
            className="relative overflow-hidden px-4 py-20 md:px-8 md:py-24 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_rgba(2,13,25,1)_0%,_rgba(4,18,27,1)_42%,_rgba(2,13,25,1)_100%)]"
        >
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }}
            />
            <div className="absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
            <div className="absolute right-[-4rem] bottom-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-5xl">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c]/95 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-100/45">
                            achievements.log
                        </p>
                    </div>

                    <div className="border-b border-white/10 px-5 py-4 md:px-7">
                        <p className="font-mono text-sm text-cyan-100/70">
                            <span className="text-emerald-300">$</span> cat ./achievement.txt
                        </p>
                    </div>

                    <div className="px-5 py-6 md:px-7 md:py-7">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10">
                                <FaTrophy className="text-lg text-cyan-100" />
                            </div>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/50">
                                    Achievements
                                </p>
                                <h2 className="mt-1 text-2xl font-semibold text-white md:text-3xl">
                                    Hackathon Results
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={achievement.event}
                                    className="rounded-[22px] border border-white/8 bg-[#08131d] px-4 py-4 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-[#0b1822]"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100/45">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <h3 className="text-base font-semibold text-white md:text-lg">
                                                    {achievement.event}
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200/85">
                                            {achievement.badge}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
