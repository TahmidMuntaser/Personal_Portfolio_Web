"use client";

import React from "react";
import { FaGraduationCap, FaLaptopCode, FaTrophy } from "react-icons/fa";

const highlightAccents = [
    { Icon: FaGraduationCap, tile: "border-cyan-400/15 bg-cyan-400/[0.06]", iconColor: "text-cyan-200" },
    { Icon: FaLaptopCode, tile: "border-teal-400/15 bg-teal-400/[0.06]", iconColor: "text-teal-200" },
    { Icon: FaTrophy, tile: "border-emerald-400/15 bg-emerald-400/[0.06]", iconColor: "text-emerald-200" }
];

const Education = ({ education }) => {
    return (
        <section
            id="education"
            className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_rgba(2,13,25,1)_0%,_rgba(4,18,27,1)_38%,_rgba(2,13,25,1)_100%)]"
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
                        Academic background
                    </h2>
                </div>

                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07141c]/95 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="border-b border-white/10 px-5 py-6 md:px-7 lg:border-b-0 lg:border-r">
                            <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/55">
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
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-100/45">
                                        Duration
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        {education.duration}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.05] px-4 py-4">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/45">
                                        CGPA
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        {education.cgpa}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {education.highlights?.length > 0 && (
                        <div className="border-t border-white/10 px-5 py-6 md:px-7">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-5 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-emerald-400" />
                                <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/55">
                                    Highlights
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                {education.highlights.map((item, index) => {
                                    const { Icon, tile, iconColor } =
                                        highlightAccents[index % highlightAccents.length];

                                    return (
                                        <div
                                            key={index}
                                            className="group flex flex-col rounded-2xl border border-white/8 bg-[#08131d] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#0b1822]"
                                        >
                                            <div className="flex items-start justify-between">
                                                <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${tile}`}>
                                                    <Icon className={`text-lg ${iconColor}`} />
                                                </span>
                                                <span className="font-mono text-[11px] tracking-[0.18em] text-slate-500/70">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <p className="mt-4 text-sm leading-6 text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                                                {item}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;
