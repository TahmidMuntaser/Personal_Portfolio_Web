"use client";

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const slugify = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const WorkCard = ({ id, title, description, fullDescription, imageUrl, link, github, tags, features, gallery, index = 0 }) => {
    const slug = slugify(title);

    return (
        <article
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#081720] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
            {/* Mini terminal title bar: the only "terminal" touch on the card */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-black/25 px-4 py-2">
                <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="truncate font-mono text-[11px] text-slate-400">
                    {String(index + 1).padStart(2, '0')}_{slug}
                </span>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050d15]">
                <Image
                    src={imageUrl}
                    alt={`${title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority={false}
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-emerald-300">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">{description}</p>

                {tags && tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                        {tags.slice(0, 4).map((tag) => (
                            <li
                                key={tag}
                                className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 font-mono text-xs text-emerald-200"
                            >
                                {tag}
                            </li>
                        ))}
                        {tags.length > 4 && (
                            <li className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-xs text-slate-500">
                                +{tags.length - 4}
                            </li>
                        )}
                    </ul>
                )}

                {/* Clearly labeled actions: always visible, no hover needed */}
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-3.5 py-2 text-sm font-semibold text-[#04121b] transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-200"
                        >
                            <FaExternalLinkAlt className="h-3 w-3" /> Live Demo
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 inline-flex items-center gap-2 rounded-lg border border-white/20 px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
                        >
                            <FaGithub className="h-4 w-4" /> Code
                        </a>
                    )}
                    <Link
                        href={`/projects/${slug}`}
                        aria-label={`View details for ${title}`}
                        className="ml-auto inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 after:absolute after:inset-0 after:content-['']"
                    >
                        Details <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default WorkCard;