"use client";

import React from "react";
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

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
    'CSS':          'border-blue-300/20 bg-blue-300/10 text-blue-300',
};

const getTagColor = (tag) => tagColors[tag] || 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300';

const WorkCard = ({ id, title, description, fullDescription, imageUrl, link, github, tags, features, gallery, index = 0, onProjectClick }) => {
    const project = { id, title, description, fullDescription, imageUrl, link, github, tags, features, gallery };

    return (
        <article
            onClick={() => onProjectClick && onProjectClick(project)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#081720] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 cursor-pointer"
        >
            {/* Top shimmer line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/50 to-transparent" />

            {/* Card index badge */}
            <div className="absolute top-3 right-3 z-20 font-mono text-xs text-emerald-100/40 bg-emerald-300/[0.06] border border-emerald-300/10 rounded-lg px-2 py-0.5">
                [{String(index + 1).padStart(2, '0')}]
            </div>

            {/* Image */}
            <div className="relative w-full h-44 overflow-hidden bg-[#050d15]">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                />
                {/* Image gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081720] via-[#081720]/30 to-transparent" />

                {/* Hover action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center h-10 w-10 rounded-xl border border-emerald-300/25 bg-emerald-300/15 text-emerald-200 backdrop-blur-sm transition-all duration-200 hover:bg-emerald-400/30 hover:scale-110"
                            title="View Live Project"
                        >
                            <FaEye className="w-4 h-4" />
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110"
                            title="View Source Code"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="px-4 py-4">
                {/* Eyebrow label */}
                <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-emerald-100/50 font-mono">
                    Project
                </p>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-xs leading-5 text-slate-300 mb-4 line-clamp-2 md:text-sm md:leading-6">
                    {description}
                </p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.slice(0, 3).map((tag, i) => (
                            <span
                                key={i}
                                className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-200 hover:scale-105 ${getTagColor(tag)}`}
                            >
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400">
                                +{tags.length - 3}
                            </span>
                        )}
                    </div>
                )}

                {/* Footer row */}
                <div className="flex items-center justify-between border-t border-white/8 pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-100/40">
                        Click to explore
                    </span>
                    <span className="text-emerald-400/70 group-hover:text-emerald-300 transition-colors duration-200">
                        <FaExternalLinkAlt className="w-3 h-3" />
                    </span>
                </div>
            </div>

            {/* Bottom hover glow */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </article>
    );
};

export default WorkCard;