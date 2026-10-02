"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

const COMMAND = "cat ./coding-profiles";
const STAGGER_MS = 110;
const COUNT_MS = 1300;
const FLASH_MS = 700;

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const useInView = (threshold = 0.2) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
};

const useTypedText = (text, active, skip, delay = 0, speed = 35) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (skip || (active && prefersReducedMotion())) {
            setCount(text.length);
            return;
        }
        if (!active) return;

        let id;
        const timer = setTimeout(() => {
            let i = 0;
            id = setInterval(() => {
                i += 1;
                setCount(i);
                if (i >= text.length) clearInterval(id);
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timer);
            clearInterval(id);
        };
    }, [active, skip, text, delay, speed]);

    return count;
};

const useCountUp = (target, active, delay, skip) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (target === null) return;
        if (skip || (active && prefersReducedMotion())) {
            setValue(target);
            return;
        }
        if (!active) return;

        let raf;
        let start;
        const step = (now) => {
            if (start === undefined) start = now;
            const progress = Math.min((now - start) / COUNT_MS, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(target * eased));
            if (progress < 1) raf = requestAnimationFrame(step);
        };
        const timer = setTimeout(() => {
            raf = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(raf);
        };
    }, [target, active, delay, skip]);

    return value;
};

const show = (value) =>
    value === undefined || value === null || value === "" ? "—" : value;

const splitValue = (value) => {
    const raw = String(value ?? "");
    const match = raw.match(/^(\D*?)(\d[\d,]*)(.*)$/);
    if (!match || /^\.\d/.test(match[3])) return null;
    return {
        prefix: match[1],
        n: parseInt(match[2].replace(/,/g, ""), 10),
        suffix: match[3],
        comma: match[2].includes(","),
    };
};

const getTotalSolved = (profiles) => {
    if (!profiles.length) return null;
    const parts = profiles.map((p) => splitValue(p.solved));
    if (parts.some((p) => p === null)) return null;
    return {
        n: parts.reduce((sum, p) => sum + p.n, 0),
        plus: parts.some((p) => p.suffix.includes("+")),
    };
};

const AnimatedValue = ({ value, active, delay, skip }) => {
    const parts = splitValue(value);
    const current = useCountUp(parts ? parts.n : null, active, delay, skip);
    if (!parts) return <>{show(value)}</>;
    return (
        <>
            {parts.prefix}
            {parts.comma ? current.toLocaleString("en-US") : current}
            {parts.suffix}
        </>
    );
};

const Stat = ({ label, value, highlight = false, count = false, active, delay, skip }) => (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
        <dt className="text-[11px] text-slate-400">{label}</dt>
        <dd
            className={`mt-1 text-sm font-semibold tabular-nums ${
                highlight ? "text-emerald-300" : "text-white"
            }`}
        >
            {count ? (
                <AnimatedValue value={value} active={active} delay={delay} skip={skip} />
            ) : (
                show(value)
            )}
        </dd>
    </div>
);

const ProfileCard = ({ profile, index, visible, skipped }) => {
    const delay = index * STAGGER_MS;
    const [flash, setFlash] = useState(false);

    const handle = String(show(profile.handle));
    const handleCount = useTypedText(handle, visible, skipped, delay + 250, 28);

    useEffect(() => {
        if (!visible || skipped || prefersReducedMotion()) {
            setFlash(false);
            return;
        }
        const on = setTimeout(() => setFlash(true), delay + COUNT_MS);
        const off = setTimeout(() => setFlash(false), delay + COUNT_MS + FLASH_MS);
        return () => {
            clearTimeout(on);
            clearTimeout(off);
        };
    }, [visible, skipped, delay]);

    return (
        <li
            style={{ transitionDelay: skipped ? "0ms" : `${delay}ms` }}
            className={`${
                skipped
                    ? ""
                    : "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            } ${
                visible
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "translate-y-4 scale-[0.98] opacity-0 blur-sm"
            }`}
        >
            <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${profile.platform} profile (opens in a new tab)`}
                className={`group flex h-full flex-col rounded-xl border bg-black/20 p-4 transition-[border-color,box-shadow,background-color] duration-500 hover:bg-emerald-400/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081720] ${
                    flash
                        ? "border-emerald-400/60 shadow-[0_0_24px_rgba(52,211,153,0.18)]"
                        : "border-white/10 hover:border-emerald-400/30"
                }`}
            >
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 transition-colors group-hover:bg-emerald-400/20">
                        <FaCode aria-hidden="true" className="text-base text-emerald-200" />
                    </span>
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-semibold text-white">
                            {profile.platform}
                        </h3>
                        <p className="break-all text-sm font-medium text-emerald-300">
                            <span className="sr-only">{handle}</span>
                            <span aria-hidden="true">
                                {handle.slice(0, handleCount)}
                                <span className="invisible">{handle.slice(handleCount)}</span>
                            </span>
                        </p>
                    </div>
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-2">
                    <Stat
                        label="Best rating"
                        value={profile.maxRating}
                        count
                        active={visible}
                        delay={delay}
                        skip={skipped}
                    />
                    <Stat label="Rank" value={profile.rank} />
                    <Stat
                        label="Solved"
                        value={profile.solved}
                        highlight
                        count
                        active={visible}
                        delay={delay}
                        skip={skipped}
                    />
                </dl>

                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                    <span
                        aria-hidden="true"
                        className="truncate font-mono text-[11px] text-slate-500"
                    >
                        $ open ./
                        {String(profile.platform).toLowerCase().replace(/\s+/g, "-")}
                    </span>
                    <span
                        aria-hidden="true"
                        className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-200 transition-transform group-hover:translate-x-0.5"
                    >
                        View profile
                        <FaArrowUpRightFromSquare className="text-[10px]" />
                    </span>
                </div>
            </a>
        </li>
    );
};

const CompetitiveProfiles = ({ profiles = [] }) => {
    const [ref, inView] = useInView();
    const [skipped, setSkipped] = useState(false);
    const [done, setDone] = useState(false);

    const typedCount = useTypedText(COMMAND, inView, skipped);
    const cardsVisible = skipped || typedCount >= COMMAND.length;

    const count = profiles.length;
    const totalMs = Math.max(count - 1, 0) * STAGGER_MS + COUNT_MS;

    const total = getTotalSolved(profiles);
    const totalCurrent = useCountUp(total ? total.n : null, cardsVisible, 0, skipped);

    useEffect(() => {
        if (!cardsVisible) return;
        if (skipped || prefersReducedMotion()) {
            setDone(true);
            return;
        }
        const timer = setTimeout(() => setDone(true), totalMs + 200);
        return () => clearTimeout(timer);
    }, [cardsVisible, skipped, totalMs]);

    return (
        <section
            id="cp"
            aria-labelledby="cp-heading"
            className="relative overflow-hidden bg-[#020d19] px-4 py-20 md:px-8 md:py-24 lg:px-20 scroll-mt-40"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
            />

            <div ref={ref} className="relative mx-auto max-w-7xl">
                <p className="font-mono text-sm text-emerald-300">
                    <span className="sr-only">visitor@portfolio:~$ {COMMAND}</span>
                    <span aria-hidden="true">
                        visitor@portfolio:~$ {COMMAND.slice(0, typedCount)}
                        <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
                        <span className="invisible">{COMMAND.slice(typedCount)}</span>
                    </span>
                </p>
                <h2
                    id="cp-heading"
                    className="mt-3 text-4xl font-bold text-white md:text-5xl"
                >
                    Coding Profiles
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
                    My competitive programming accounts, with my best rating, rank and
                    problems solved on each platform.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#081720]">
                    <div className="flex items-center gap-3 border-b border-white/10 bg-black/25 px-4 py-2.5">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <p className="truncate font-mono text-xs text-slate-400">
                            ~/portfolio/coding-profiles — zsh
                        </p>
                    </div>

                    <div
                        aria-hidden="true"
                        className={`h-px origin-left bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)] ${
                            done ? "opacity-0" : "opacity-100"
                        }`}
                        style={{
                            transform: `scaleX(${cardsVisible ? 1 : 0})`,
                            transition:
                                skipped || done
                                    ? "opacity 500ms"
                                    : `transform ${totalMs}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms`,
                        }}
                    />

                    <div className="px-4 py-5 md:px-6 md:py-6">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300">
                            <span className="font-mono text-emerald-300" aria-hidden="true">
                                [+]
                            </span>
                            <span>
                                {count} platform{count === 1 ? "" : "s"}
                            </span>
                            {total && (
                                <span className="rounded-md border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 tabular-nums text-emerald-200">
                                    {totalCurrent.toLocaleString("en-US")}
                                    {total.plus ? "+" : ""} problems solved in total
                                </span>
                            )}

                            <div className="ml-auto flex items-center gap-3">
                                <span role="status" className="font-mono text-xs text-slate-400">
                                    {!inView ? null : done ? (
                                        <span className="text-emerald-300">[ok] profiles loaded</span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5">
                                            <span
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300 motion-reduce:animate-none"
                                            />
                                            loading profiles…
                                        </span>
                                    )}
                                </span>
                                {inView && !done && (
                                    <button
                                        type="button"
                                        onClick={() => setSkipped(true)}
                                        className="rounded-md border border-white/15 px-2 py-1 text-xs text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                                    >
                                        Skip animation
                                    </button>
                                )}
                            </div>
                        </div>

                        {count === 0 ? (
                            <p className="mt-5 rounded-lg border border-dashed border-white/10 px-4 py-6 text-center text-sm text-slate-400">
                                No profiles to show yet.
                            </p>
                        ) : (
                            <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {profiles.map((profile, index) => (
                                    <ProfileCard
                                        key={profile.platform}
                                        profile={profile}
                                        index={index}
                                        visible={cardsVisible}
                                        skipped={skipped}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveProfiles;