"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaExternalLinkAlt,
    FaGithub,
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaChevronDown
} from "react-icons/fa";

/* ─── Tag colours ─────────────────────────────────────── */
const tagColors = {
    "React": "border-blue-400/20 bg-blue-400/10 text-blue-300",
    "React.js": "border-blue-400/20 bg-blue-400/10 text-blue-300",
    "Next.js": "border-slate-400/20 bg-slate-400/10 text-slate-300",
    "Tailwind CSS": "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    "JavaScript": "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
    "TypeScript": "border-blue-300/20 bg-blue-300/10 text-blue-400",
    "Node.js": "border-green-400/20 bg-green-400/10 text-green-300",
    "Express.js": "border-slate-500/20 bg-slate-500/10 text-slate-300",
    "Python": "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    "Django": "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    "MongoDB": "border-green-300/20 bg-green-300/10 text-green-300",
    "Firebase": "border-orange-400/20 bg-orange-400/10 text-orange-300",
    "Vite": "border-teal-400/20 bg-teal-400/10 text-teal-300",
    "SQLite3": "border-blue-500/20 bg-blue-500/10 text-blue-400",
    "Html": "border-orange-400/20 bg-orange-400/10 text-orange-300",
    "HTML": "border-orange-400/20 bg-orange-400/10 text-orange-300",
    "CSS": "border-blue-300/20 bg-blue-300/10 text-blue-300",
    "MySQL": "border-blue-500/20 bg-blue-500/10 text-blue-400"
};
const getTagColor = (tag) => tagColors[tag] || "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";

/* ─── Typing engine ───────────────────────────────────────────────── */
const TICK_MS = 16; // tick speed
const PAUSE = 8;    // pause between lines (in characters' worth of time)

const useTypedLines = (lines, run, step = 3) => {
    const total = lines.reduce((sum, text) => sum + text.length + PAUSE, 0);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        if (!run) {
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
                if (t + step >= total) {
                    clearInterval(id);
                    return total;
                }
                return t + step;
            });
        }, TICK_MS);
        return () => clearInterval(id);
    }, [run, total, step]);

    let remaining = tick;
    const rows = lines.map((text) => {
        const typed = Math.max(0, Math.min(text.length, remaining));
        const active = remaining >= 0 && remaining < text.length + PAUSE;
        const started = remaining >= 0 && (typed > 0 || active);
        remaining -= text.length + PAUSE;
        return { text, typed, active, started };
    });

    return { rows, done: tick >= total, skip: () => setTick(total) };
};

const Cursor = () => (
    <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
);

/* Plain section heading + a small terminal caption */
const SectionHeading = ({ title, command, meta }) => (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {meta && <span className="text-sm text-slate-400">{meta}</span>}
        <span className="font-mono text-xs text-slate-500">
            <span className="text-emerald-600">$</span> {command}
        </span>
    </div>
);

/* ═══════════════════════════════════════════════════════════════════ */
const ProjectDetail = ({ project }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [featuresOpen, setFeaturesOpen] = useState(true);
    const featuresId = useId();

    const description = project ? project.fullDescription || project.description || "" : "";
    const summary = project?.description && project.description !== description ? project.description : "";
    const features = project?.features ?? [];
    const gallery = project?.gallery ?? [];

    // start typing only once the Key features block is actually on screen
    const featuresRef = useRef(null);
    const [featuresInView, setFeaturesInView] = useState(false);
    const featureLines = useTypedLines(features, featuresOpen && featuresInView, 3);

    useEffect(() => {
        const el = featuresRef.current;
        if (!el || featuresInView) return;
        if (typeof IntersectionObserver === "undefined") {
            setFeaturesInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFeaturesInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [project, featuresInView]);

    /* Keyboard nav for the lightbox */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
            if (selectedImage && project) {
                if (e.key === "ArrowLeft" && selectedImage.index > 0)
                    setSelectedImage({ src: gallery[selectedImage.index - 1], index: selectedImage.index - 1 });
                if (e.key === "ArrowRight" && selectedImage.index < gallery.length - 1)
                    setSelectedImage({ src: gallery[selectedImage.index + 1], index: selectedImage.index + 1 });
            }
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [selectedImage, project, gallery]);

    if (!project) return null;

    const slug = project.title.toLowerCase().replace(/\s+/g, "-");
    const openImg = (src, index) => setSelectedImage({ src, index });
    const goTo = (index) => setSelectedImage({ src: gallery[index], index });

    return (
        <>
            <section className="relative overflow-hidden bg-[#020d19] px-2 py-16 sm:px-4 md:px-6 md:py-20 lg:px-8">
                {/* same grid + glow as Works / Education */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
                        backgroundSize: "34px 34px"
                    }}
                />
                <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="mb-8 px-2 sm:px-0">
                        <Link
                            href="/#works"
                            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                        >
                            <FaChevronLeft className="h-3 w-3" aria-hidden="true" /> Back to all projects
                        </Link>
                        <p className="mt-6 font-mono text-sm text-emerald-300">
                            <span className="text-emerald-500">visitor@portfolio:~$</span> cat ./projects/{slug}
                            <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300 motion-reduce:animate-none" />
                        </p>
                        <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">{project.title}</h1>
                        {summary && <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">{summary}</p>}

                        {/* Links first, so a recruiter can open the project right away */}
                        {(project.link || project.github) && (
                            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/15 px-4 py-2.5 text-emerald-100 transition-colors hover:bg-emerald-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                    >
                                        View live demo
                                        <FaExternalLinkAlt className="h-3 w-3 opacity-70" aria-hidden="true" />
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2.5 text-slate-200 transition-colors hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                    >
                                        <FaGithub className="h-4 w-4" aria-hidden="true" />
                                        View source code
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Terminal window */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081720]">
                        <div className="flex items-center gap-3 border-b border-white/10 bg-black/25 px-4 py-2">
                            <div className="flex gap-1.5" aria-hidden="true">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <span className="truncate font-mono text-[11px] text-slate-400">
                                ~/portfolio/projects/{slug} — zsh
                            </span>
                        </div>

                        <div className="space-y-8 p-4 md:p-5">
                            {/* Preview image */}
                            {project.imageUrl && (
                                <div className="relative aspect-[16/8] w-full overflow-hidden rounded-lg border border-white/10 bg-black/30">
                                    <Image
                                        src={project.imageUrl}
                                        alt={`${project.title} preview`}
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 960px, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Overview */}
                            {description && (
                                <div>
                                    <SectionHeading title="Overview" command="cat description" />
                                    <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{description}</p>
                                </div>
                            )}

                            {/* Tech stack */}
                            {project.tags && project.tags.length > 0 && (
                                <div className="border-t border-white/10 pt-6">
                                    <SectionHeading
                                        title="Tech stack"
                                        meta={`${project.tags.length} technologies`}
                                        command="ls ./stack"
                                    />
                                    <ul className="mt-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <li
                                                key={i}
                                                className={`rounded-md border px-3 py-1 text-sm ${getTagColor(tag)}`}
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Key features */}
                            {features.length > 0 && (
                                <div ref={featuresRef} className="border-t border-white/10 pt-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <SectionHeading
                                            title="Key features"
                                            meta={`${features.length} ${features.length === 1 ? "feature" : "features"}`}
                                            command='grep -r "feature" ./src'
                                        />
                                        <div className="flex shrink-0 items-center gap-1 text-xs text-slate-400">
                                            {featuresOpen && featuresInView && !featureLines.done && (
                                                <button
                                                    type="button"
                                                    onClick={featureLines.skip}
                                                    className="rounded-md px-2 py-1 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                                >
                                                    Skip animation
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => setFeaturesOpen((v) => !v)}
                                                aria-expanded={featuresOpen}
                                                aria-controls={featuresId}
                                                className="flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                            >
                                                {featuresOpen ? "Collapse" : "Show"}
                                                <FaChevronDown
                                                    aria-hidden="true"
                                                    className={`transition-transform duration-300 motion-reduce:transition-none ${
                                                        featuresOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        id={featuresId}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                                            featuresOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <ul className="space-y-2 pb-1 pt-4">
                                                {featureLines.rows.map((line, index) => (
                                                    <li
                                                        key={index}
                                                        className={`flex gap-3 rounded-md border px-3 py-2.5 text-sm leading-6 ${
                                                            line.started ? "border-white/5 bg-black/20" : "border-transparent"
                                                        }`}
                                                    >
                                                        <span className="sr-only">{line.text}</span>
                                                        <span
                                                            aria-hidden="true"
                                                            className={`font-mono ${line.started ? "text-emerald-400" : "invisible"}`}
                                                        >
                                                            [+]
                                                        </span>
                                                        <span aria-hidden="true" className="min-w-0 text-slate-300">
                                                            {line.text.slice(0, line.typed)}
                                                            {line.active && featuresOpen && !featureLines.done && <Cursor />}
                                                            <span className="invisible">{line.text.slice(line.typed)}</span>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Screenshots */}
                            {gallery.length > 0 && (
                                <div className="border-t border-white/10 pt-6">
                                    <SectionHeading
                                        title="Screenshots"
                                        meta={`${gallery.length} images · click to enlarge`}
                                        command="ls ./screenshots"
                                    />
                                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                        {gallery.map((img, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => openImg(img, i)}
                                                aria-label={`Enlarge screenshot ${i + 1} of ${gallery.length}`}
                                                className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/30 transition-colors hover:border-emerald-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                            >
                                                <Image
                                                    src={img}
                                                    alt=""
                                                    fill
                                                    sizes="(min-width: 640px) 300px, 50vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Screenshot ${selectedImage.index + 1} of ${gallery.length}`}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020d19]/95 p-4 backdrop-blur-xl"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#081720]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/25 px-4 py-2">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5" aria-hidden="true">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </div>
                                <span className="text-xs text-slate-300">
                                    {project.title} — screenshot {selectedImage.index + 1} of {gallery.length}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close (Esc)"
                                className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-slate-400 transition-colors hover:border-rose-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                            >
                                <FaTimes className="h-3 w-3" />
                            </button>
                        </div>

                        <div className="relative flex-1">
                            <Image
                                src={selectedImage.src}
                                alt={`${project.title} screenshot ${selectedImage.index + 1}`}
                                fill
                                sizes="100vw"
                                className="object-contain"
                                priority
                            />
                            {selectedImage.index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => goTo(selectedImage.index - 1)}
                                    aria-label="Previous screenshot (←)"
                                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/60 text-white transition-colors hover:border-emerald-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                >
                                    <FaChevronLeft />
                                </button>
                            )}
                            {selectedImage.index < gallery.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => goTo(selectedImage.index + 1)}
                                    aria-label="Next screenshot (→)"
                                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/60 text-white transition-colors hover:border-emerald-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                                >
                                    <FaChevronRight />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-4 border-t border-white/10 bg-black/40 px-4 py-2 text-xs text-slate-400">
                            <span className="rounded-sm bg-emerald-400 px-2 py-0.5 font-mono font-bold text-[#020d19]">
                                {selectedImage.index + 1}/{gallery.length}
                            </span>
                            <span className="ml-auto hidden text-slate-500 sm:inline">Use ← → to browse, Esc to close</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectDetail;