"use client";

import React from "react";

const Education = ({ education }) => {
    return (
        <section
            id="education"
            className="relative overflow-hidden px-4 py-20 md:px-8 md:py-24 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_rgba(2,13,25,1)_0%,_rgba(4,18,27,1)_38%,_rgba(2,13,25,1)_100%)]"
        >
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                    backgroundSize: "34px 34px"
                }}
            />
            <div className="absolute left-[-4rem] top-14 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
            <div className="absolute right-[-4rem] bottom-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/75">
                        Education
                    </p>
                    <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
                        Built on a strong academic base
                    </h2>
                </div>

                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c]/95 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-cyan-100/45">
                            academic-record.sh
                        </p>
                    </div>

                    <div className="border-b border-white/10 px-5 py-4 md:px-7">
                        <p className="font-mono text-sm text-cyan-100/70">
                            <span className="text-emerald-300">$</span> cat ./education/record.json
                        </p>
                    </div>

                    <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="border-b border-white/10 px-5 py-6 md:px-7 lg:border-b-0 lg:border-r">
                            <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-100/45">
                                Program
                            </p>
                            <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                                {education.degree}
                            </h3>
                            <p className="mt-4 text-base text-slate-300 md:text-lg">
                                {education.institution}
                            </p>
                        </div>

                        <div className="px-5 py-6 md:px-7">
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                <div className="rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.05] px-4 py-4">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-100/45">
                                        Duration
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        {education.duration}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.05] px-4 py-4">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-100/45">
                                        CGPA
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        {education.cgpa}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
