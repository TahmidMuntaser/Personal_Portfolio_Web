"use client";

import React from "react";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

const CompetitiveProfiles = ({ profiles }) => {
    return (
        <section
            id="cp"
            className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_#020d19_0%,_#061722_100%)]"
        >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.12),_transparent_28%)]" />
            <div className="absolute right-[-5rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c]/95 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-100/45">
                            cp-profiles.json
                        </p>
                    </div>

                    <div className="border-b border-white/10 px-5 py-4 md:px-7">
                        <p className="font-mono text-sm text-cyan-100/70">
                            <span className="text-emerald-300">$</span> cat ./competitive-profiles
                        </p>
                    </div>

                    <div className="px-5 py-6 md:px-7 md:py-7">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10">
                                <FaCode className="text-lg text-cyan-100" />
                            </div>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/50">
                                    Competitive Programming
                                </p>
                                <h2 className="mt-1 text-2xl font-semibold text-white md:text-3xl">
                                    Coding Profiles
                                </h2>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {profiles.map((profile, index) => (
                                <a
                                    key={profile.platform}
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-[22px] border border-white/8 bg-[#08131d] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#0b1822]"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100/45">
                                                {String(index + 1).padStart(2, "0")}
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                {profile.platform}
                                            </h3>
                                        </div>
                                        <FaArrowUpRightFromSquare className="mt-1 text-sm text-cyan-200/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-100" />
                                    </div>

                                    <div className="mt-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] px-4 py-4">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-100/50">
                                            Handle
                                        </p>
                                        <p className="mt-2 break-all text-base font-semibold text-emerald-300">
                                            {profile.handle}
                                        </p>
                                    </div>

                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        <div className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3">
                                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                                Max Rating
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-white">
                                                {profile.maxRating}
                                            </p>
                                        </div>
                                        <div className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3">
                                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                                Rank
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-white">
                                                {profile.rank}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                            Problems Solved
                                        </p>
                                        <p className="mt-2 text-sm font-semibold text-white">
                                            {profile.solved}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveProfiles;
