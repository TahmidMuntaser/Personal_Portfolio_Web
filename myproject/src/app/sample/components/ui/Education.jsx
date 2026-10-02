"use client";

import React, { useEffect, useId, useState } from "react";
import { FaGraduationCap, FaRegCalendarAlt, FaStar, FaChevronDown } from "react-icons/fa";

/*
  Education — compact Works-style terminal card.
  Click "ls ./highlights" and the lines are typed out one by one, like a terminal.
  Same props: education.degree, institution, duration, cgpa, highlights[]
*/

const STEP = 2;      // characters typed per tick
const TICK_MS = 16;  // tick speed (~125 chars/sec)
const PAUSE = 12;    // short pause between lines, in characters' worth of time

const Education = ({ education }) => {
    const highlights = education.highlights ?? [];
    const [open, setOpen] = useState(false);
    const [tick, setTick] = useState(0);
    const panelId = useId();

    const total = highlights.reduce((sum, text) => sum + text.length + PAUSE, 0);
    const done = tick >= total;

    useEffect(() => {
        if (!open) {
            setTick(0);
            return;
        }

        // reduced motion: print everything at once
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setTick(total);
            return;
        }

        setTick(0);
        const id = setInterval(() => {
            setTick((t) => {
                if (t + STEP >= total) {
                    clearInterval(id);
                    return total;
                }
                return t + STEP;
            });
        }, TICK_MS);
        return () => clearInterval(id);
    }, [open, total]);

    // work out what each line looks like at the current tick
    let remaining = tick;
    const lines = highlights.map((text) => {
        const typed = Math.max(0, Math.min(text.length, remaining));
        const active = remaining >= 0 && remaining < text.length + PAUSE;
        const started = remaining >= 0 && (typed > 0 || active);
        remaining -= text.length + PAUSE;
        return { text, typed, active, started };
    });

    const Cursor = () => (
        <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
    );

    return (
        <section
            id="education"
            className="relative scroll-mt-40 overflow-hidden bg-[#020d19] px-4 py-16 md:px-8 md:py-20 lg:px-20"
        >
            {/* same grid + glow as Works */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                    backgroundSize: "34px 34px"
                }}
            />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <p className="font-mono text-sm text-emerald-300">
                        <span className="text-emerald-500">visitor@portfolio:~$</span> cat ./education
                        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Education</h2>
                </div>

                {/* Terminal window */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081720]">
                    <div className="flex items-center gap-3 border-b border-white/10 bg-black/25 px-4 py-2">
                        <div className="flex gap-1.5" aria-hidden="true">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">~/portfolio/education.md — zsh</span>
                    </div>

                    <div className="p-5 md:p-6">
                        {/* Degree row */}
                        <div className="flex items-start gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                                <FaGraduationCap aria-hidden="true" />
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                                    {education.degree}
                                </h3>
                                <p className="mt-0.5 text-sm text-slate-400 md:text-base">{education.institution}</p>
                            </div>
                        </div>

                        {/* Facts as compact tags */}
                        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 py-1.5 text-slate-300">
                                <FaRegCalendarAlt className="text-emerald-400" aria-hidden="true" />
                                <span className="text-slate-500">duration</span> {education.duration}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/[0.08] px-3 py-1.5 text-emerald-200">
                                <FaStar className="text-emerald-400" aria-hidden="true" />
                                <span className="text-slate-500">cgpa</span> {education.cgpa}
                            </span>
                        </div>

                        {/* Highlights: click to "run" the command */}
                        {highlights.length > 0 && (
                            <div className="mt-6 border-t border-white/10 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpen((v) => !v)}
                                    aria-expanded={open}
                                    aria-controls={panelId}
                                    className="group flex w-full items-center justify-between gap-3 rounded-md px-2 py-2 text-left font-mono text-sm transition-colors hover:bg-emerald-400/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                >
                                    <span className="text-emerald-300">
                                        <span className="text-emerald-500">$</span> ls ./highlights
                                        <span className="ml-3 text-xs text-slate-500">
                                            {highlights.length} {highlights.length === 1 ? "item" : "items"}
                                        </span>
                                    </span>
                                    <span className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-emerald-300">
                                        {open ? "collapse" : "run"}
                                        <FaChevronDown
                                            aria-hidden="true"
                                            className={`transition-transform duration-300 motion-reduce:transition-none ${
                                                open ? "rotate-180" : ""
                                            }`}
                                        />
                                    </span>
                                </button>

                                <div
                                    id={panelId}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <ul className="space-y-2 px-2 pb-1 pt-3 font-mono text-sm leading-6">
                                            {lines.map((line, index) => (
                                                <li
                                                    key={index}
                                                    className={`flex gap-3 rounded-md border px-3 py-2.5 ${
                                                        line.started
                                                            ? "border-white/5 bg-black/20"
                                                            : "border-transparent"
                                                    }`}
                                                >
                                                    {/* screen readers get the full text, sighted users get the typing */}
                                                    <span className="sr-only">{line.text}</span>
                                                    <span
                                                        aria-hidden="true"
                                                        className={line.started ? "text-emerald-400" : "invisible"}
                                                    >
                                                        [+]
                                                    </span>
                                                    <span aria-hidden="true" className="min-w-0 text-slate-300">
                                                        {line.text.slice(0, line.typed)}
                                                        {line.active && open && !done && <Cursor />}
                                                        {/* invisible remainder keeps the height stable while typing */}
                                                        <span className="invisible">{line.text.slice(line.typed)}</span>
                                                    </span>
                                                </li>
                                            ))}
                                            {/* finished: fresh prompt */}
                                            <li aria-hidden="true" className={`px-3 pt-1 ${done && open ? "" : "invisible"}`}>
                                                <span className="text-emerald-500">$</span>
                                                <Cursor />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;