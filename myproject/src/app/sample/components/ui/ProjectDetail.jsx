"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaChevronLeft, FaChevronRight, FaRocket } from 'react-icons/fa';

/* ─── Tag colour map ──────────────────────────────────────────────── */
const tagColors = {
    'React':        'border-blue-400/20 bg-blue-400/10 text-blue-300',
    'React.js':     'border-blue-400/20 bg-blue-400/10 text-blue-300',
    'Next.js':      'border-slate-400/20 bg-slate-400/10 text-slate-300',
    'Tailwind CSS': 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
    'JavaScript':   'border-yellow-400/20 bg-yellow-400/10 text-yellow-300',
    'TypeScript':   'border-blue-300/20 bg-blue-300/10 text-blue-400',
    'Node.js':      'border-green-400/20 bg-green-400/10 text-green-300',
    'Express.js':   'border-slate-500/20 bg-slate-500/10 text-slate-300',
    'Python':       'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
    'Django':       'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
    'MongoDB':      'border-green-300/20 bg-green-300/10 text-green-300',
    'Firebase':     'border-orange-400/20 bg-orange-400/10 text-orange-300',
    'Vite':         'border-teal-400/20 bg-teal-400/10 text-teal-300',
    'SQLite3':      'border-blue-500/20 bg-blue-500/10 text-blue-400',
    'Html':         'border-orange-400/20 bg-orange-400/10 text-orange-300',
    'HTML':         'border-orange-400/20 bg-orange-400/10 text-orange-300',
    'CSS':          'border-blue-300/20 bg-blue-300/10 text-blue-300',
    'MySQL':        'border-blue-500/20 bg-blue-500/10 text-blue-400',
};
const getTagColor = (tag) => tagColors[tag] || 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300';

/* ─── Section panel wrapper ───────────────────────────────────────── */
const Panel = ({ label, count, children }) => (
    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#07141c] shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-emerald-100/55 font-mono">{label}</p>
            {count !== undefined && (
                <p className="text-xs text-slate-400 font-mono">{count} items</p>
            )}
        </div>
        <div className="p-5">{children}</div>
    </div>
);

/* ═══════════════════════════════════════════════════════════════════ */
const ProjectDetail = ({ project, isOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    /* Lock scroll */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            document.body.style.overflow = 'unset';
            setIsAnimating(false);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    /* Keyboard nav */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') {
                if (selectedImage) setSelectedImage(null);
                else onClose();
            }
            if (selectedImage && project) {
                if (e.key === 'ArrowLeft' && selectedImage.index > 0)
                    setSelectedImage({ src: project.gallery[selectedImage.index - 1], index: selectedImage.index - 1 });
                if (e.key === 'ArrowRight' && selectedImage.index < project.gallery.length - 1)
                    setSelectedImage({ src: project.gallery[selectedImage.index + 1], index: selectedImage.index + 1 });
            }
        };
        if (isOpen) document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose, selectedImage, project]);

    if (!isOpen || !project) return null;

    const openImg = (src, index) => setSelectedImage({ src, index });

    return (
        <>
            {/* ── Backdrop ──────────────────────────────────────────── */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6
                    bg-[#020D19]/80 backdrop-blur-xl
                    transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                {/* ── Modal shell ─────────────────────────────────────── */}
                <div
                    className={`relative w-full max-w-5xl max-h-[95vh] flex flex-col
                        rounded-[30px] border border-emerald-400/15
                        bg-[linear-gradient(160deg,_#071019_0%,_#04111c_60%,_#071019_100%)]
                        shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                        transition-all duration-500 overflow-hidden
                        ${isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
                >
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-30"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)",
                            backgroundSize: "28px 28px"
                        }}
                    />
                    {/* Glow */}
                    <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-teal-400/6 blur-3xl pointer-events-none" />

                    {/* ── Terminal title bar ───────────────────────────── */}
                    <div className="relative flex-shrink-0 flex items-center justify-between border-b border-emerald-400/15 bg-[#06131b]/90 px-5 py-3 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-300" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-100/50">
                            project-detail.exe
                        </p>
                        <button
                            onClick={onClose}
                            title="Close (ESC)"
                            className="flex items-center justify-center h-8 w-8 rounded-xl border border-white/10 bg-white/5
                                text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-400/30
                                transition-all duration-200 hover:rotate-90"
                        >
                            <FaTimes className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* ── Scrollable body ─────────────────────────────── */}
                    <div className="relative flex-1 overflow-y-auto modal-scrollbar">

                        {/* Hero image banner */}
                        <div className="relative h-52 sm:h-64 w-full flex-shrink-0 overflow-hidden">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover scale-105 blur-[2px] brightness-50"
                                priority
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04111c]/60 to-[#04111c]" />
                            {/* Title content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-8">
                                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.36em] text-emerald-300/80">
                                    $ cat project/{project.title.toLowerCase().replace(/\s+/g, '-')}/README.md
                                </p>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                                    <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-100 bg-clip-text text-transparent">
                                        {project.title}
                                    </span>
                                </h1>
                                <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                            </div>
                        </div>

                        {/* Content panels */}
                        <div className="relative space-y-4 p-4 sm:p-5 md:p-7">

                            {/* ── Action buttons ───────────────────────── */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden flex items-center justify-center gap-2.5
                                            rounded-2xl border border-emerald-400/20 bg-emerald-400/8
                                            px-5 py-3.5 font-semibold text-emerald-200
                                            transition-all duration-300 hover:bg-emerald-400/15 hover:border-emerald-400/35
                                            hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-400/10"
                                    >
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
                                        <FaRocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="text-sm">View Live Demo</span>
                                        <FaExternalLinkAlt className="w-3 h-3 opacity-60" />
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden flex items-center justify-center gap-2.5
                                            rounded-2xl border border-white/10 bg-white/[0.04]
                                            px-5 py-3.5 font-semibold text-slate-300
                                            transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20
                                            hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                                    >
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-sm">View Source Code</span>
                                    </a>
                                )}
                            </div>

                            {/* ── Overview ─────────────────────────────── */}
                            <Panel label="overview.txt">
                                <p className="font-mono text-sm text-emerald-100/70 mb-3">
                                    <span className="text-emerald-300">$</span> cat description
                                </p>
                                <p className="text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                                    {project.fullDescription || project.description}
                                </p>
                            </Panel>

                            {/* ── Tech stack ───────────────────────────── */}
                            {project.tags && project.tags.length > 0 && (
                                <Panel label="stack.log" count={project.tags.length}>
                                    <p className="font-mono text-sm text-emerald-100/70 mb-4">
                                        <span className="text-emerald-300">$</span> ls ./dependencies
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs
                                                    uppercase tracking-[0.15em] transition-all duration-200 hover:scale-105
                                                    ${getTagColor(tag)}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Panel>
                            )}

                            {/* ── Key features ─────────────────────────── */}
                            {project.features && project.features.length > 0 && (
                                <Panel label="features.log" count={project.features.length}>
                                    <p className="font-mono text-sm text-emerald-100/70 mb-4">
                                        <span className="text-emerald-300">$</span> grep -r &quot;feature&quot; ./src
                                    </p>
                                    <div className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="group relative overflow-hidden flex items-start gap-4
                                                    rounded-2xl border border-white/8 bg-black/20
                                                    px-4 py-4 transition-all duration-300
                                                    hover:border-emerald-300/20 hover:bg-emerald-300/[0.05]"
                                            >
                                                {/* top shimmer */}
                                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {/* index badge */}
                                                <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg border border-emerald-300/15 bg-emerald-300/10 font-mono text-[10px] text-emerald-300/80">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <p className="text-sm leading-6 text-slate-300 md:text-[0.9rem] md:leading-6">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </Panel>
                            )}

                            {/* ── Gallery ──────────────────────────────── */}
                            {project.gallery && project.gallery.length > 0 && (
                                <Panel label="gallery.sh" count={project.gallery.length}>
                                    <p className="font-mono text-sm text-emerald-100/70 mb-4">
                                        <span className="text-emerald-300">$</span> ls ./screenshots
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {project.gallery.map((img, i) => (
                                            <div
                                                key={i}
                                                onClick={() => openImg(img, i)}
                                                className="group relative aspect-video overflow-hidden cursor-pointer
                                                    rounded-xl border border-white/10 bg-[#050d15]
                                                    transition-all duration-300 hover:-translate-y-1
                                                    hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-400/10"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Screenshot ${i + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300/15 backdrop-blur-sm">
                                                            <svg className="w-4 h-4 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                            </svg>
                                                        </div>
                                                        <span className="font-mono text-[10px] text-white/80">expand</span>
                                                    </div>
                                                </div>
                                                {/* Counter badge */}
                                                <div className="absolute top-2 left-2 bg-[#06131b]/80 backdrop-blur-sm border border-emerald-300/15 text-emerald-100/70 font-mono px-2 py-0.5 rounded-lg text-[10px]">
                                                    {String(i + 1).padStart(2, '0')}/{String(project.gallery.length).padStart(2, '0')}
                                                </div>
                                                {/* Bottom shimmer */}
                                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        ))}
                                    </div>
                                </Panel>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Lightbox ──────────────────────────────────────────────── */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#020D19]/96 backdrop-blur-xl"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            title="Close (ESC)"
                            className="absolute top-0 right-0 z-10 flex items-center justify-center h-9 w-9
                                rounded-xl border border-white/10 bg-white/5 text-slate-400
                                hover:text-white hover:bg-red-500/20 hover:border-red-400/30
                                transition-all duration-200 hover:rotate-90"
                        >
                            <FaTimes className="w-3.5 h-3.5" />
                        </button>

                        {/* Prev */}
                        {selectedImage.index > 0 && (
                            <button
                                onClick={() => setSelectedImage({ src: project.gallery[selectedImage.index - 1], index: selectedImage.index - 1 })}
                                title="Previous (←)"
                                className="absolute left-0 z-10 flex items-center justify-center h-11 w-11
                                    rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-sm
                                    transition-all duration-200 hover:bg-emerald-400/15 hover:border-emerald-400/30 hover:scale-110"
                            >
                                <FaChevronLeft className="w-5 h-5" />
                            </button>
                        )}

                        {/* Next */}
                        {selectedImage.index < project.gallery.length - 1 && (
                            <button
                                onClick={() => setSelectedImage({ src: project.gallery[selectedImage.index + 1], index: selectedImage.index + 1 })}
                                title="Next (→)"
                                className="absolute right-0 z-10 flex items-center justify-center h-11 w-11
                                    rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-sm
                                    transition-all duration-200 hover:bg-emerald-400/15 hover:border-emerald-400/30 hover:scale-110"
                            >
                                <FaChevronRight className="w-5 h-5" />
                            </button>
                        )}

                        {/* Image */}
                        <div className="relative w-full h-full mx-14 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={selectedImage.src}
                                alt={`Screenshot ${selectedImage.index + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Counter */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-xs text-emerald-100/70
                            bg-[#06131b]/90 backdrop-blur-sm border border-emerald-400/15 px-4 py-2 rounded-full">
                            {String(selectedImage.index + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Scrollbar & animation styles ──────────────────────────── */}
            <style>{`
                .modal-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(52, 211, 153, 0.25) rgba(6, 19, 27, 0.8);
                }
                .modal-scrollbar::-webkit-scrollbar { width: 6px; }
                .modal-scrollbar::-webkit-scrollbar-track {
                    background: rgba(6, 19, 27, 0.8);
                    border-radius: 10px;
                }
                .modal-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, rgba(52,211,153,0.35), rgba(20,184,166,0.35));
                    border-radius: 10px;
                }
                .modal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, rgba(52,211,153,0.6), rgba(20,184,166,0.6));
                }
            `}</style>
        </>
    );
};

export default ProjectDetail;