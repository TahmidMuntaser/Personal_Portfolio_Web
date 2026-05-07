"use client";

import React, { useMemo, useState } from "react";

const categoryMap = {
    JavaScript: "Languages",
    C: "Languages",
    "C++": "Languages",
    Python: "Languages",
    HTML: "Languages",
    CSS: "Languages",
    Java: "Languages",
    React: "Frameworks",
    "Next.js": "Frameworks",
    "Tailwind CSS": "Frameworks",
    Django: "Frameworks",
    "Django REST": "Frameworks",
    PostgreSQL: "Databases & Tools",
    SQLite: "Databases & Tools",
    Git: "Databases & Tools",
    GitHub: "Databases & Tools",
    Playwright: "Databases & Tools",
    Docker: "Databases & Tools"
};

const categories = ["All", "Languages", "Frameworks", "Databases & Tools"];

const Skills = ({ skills }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const groupedSkills = useMemo(
        () =>
            categories.slice(1).map((category) => ({
                category,
                items: skills.filter((skill) => categoryMap[skill.name] === category)
            })),
        [skills]
    );

    const filteredSkills = useMemo(() => {
        if (activeCategory === "All") {
            return skills;
        }

        return skills.filter((skill) => categoryMap[skill.name] === activeCategory);
    }, [activeCategory, skills]);

    return (
        <section
            id="skills"
            className="relative overflow-hidden px-3 py-14 sm:px-4 md:px-8 md:py-20 lg:px-20 scroll-mt-40 bg-[linear-gradient(180deg,_#020617_0%,_#04111c_100%)]"
        >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_32%)]"></div>

            <div className="relative mx-auto max-w-7xl">
                <div className="overflow-hidden rounded-[24px] border border-emerald-400/15 bg-[#071019]/95 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:rounded-[28px]">
                    <div className="flex items-center justify-between border-b border-emerald-400/10 bg-[#0b1622] px-4 py-3 sm:px-5 md:px-7">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                            <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                            <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                        </div>
                        <p className="hidden font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-100/45 sm:block">
                            skill-terminal.sh
                        </p>
                    </div>

                    <div className="border-b border-emerald-400/10 px-4 py-4 sm:px-5 sm:py-5 md:px-7">
                        <div className="font-mono text-sm leading-7 text-slate-300">
                            <p>
                                <span className="text-emerald-300">$</span> ls portfolio/stack
                            </p>
                            <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm">
                                Interactive terminal view of languages, frameworks, and tooling.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
                        <aside className="border-b border-emerald-400/10 bg-[#08131d] px-4 py-4 sm:px-5 sm:py-5 md:px-7 lg:border-r lg:border-b-0 lg:border-r-emerald-400/10 lg:py-6">
                            <p className="font-mono text-xs uppercase tracking-[0.26em] text-emerald-100/45">
                                Directory
                            </p>

                            <div className="mt-4 lg:hidden">
                                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-100/40">
                                    Select Directory
                                </label>
                                <div className="rounded-xl border border-emerald-400/15 bg-[#0c1724] px-3 py-3 sm:px-4">
                                    <select
                                        value={activeCategory}
                                        onChange={(event) => setActiveCategory(event.target.value)}
                                        className="w-full bg-transparent font-mono text-sm text-slate-200 outline-none"
                                    >
                                        {categories.map((category) => {
                                            const count =
                                                category === "All"
                                                    ? skills.length
                                                    : skills.filter((skill) => categoryMap[skill.name] === category).length;

                                            return (
                                                <option key={category} value={category} className="bg-[#0c1724] text-slate-200">
                                                    {category === "All"
                                                        ? `./all (${count})`
                                                        : `./${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")} (${count})`}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5 hidden font-mono text-sm lg:block lg:space-y-3">
                                {categories.map((category) => {
                                    const count =
                                        category === "All"
                                            ? skills.length
                                            : skills.filter((skill) => categoryMap[skill.name] === category).length;

                                    const isActive = activeCategory === category;

                                    return (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() => setActiveCategory(category)}
                                            className={`flex min-w-fit items-center justify-between gap-4 whitespace-nowrap rounded-xl border px-4 py-3 text-left transition-colors duration-200 lg:w-full ${
                                                isActive
                                                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                                    : "border-transparent bg-transparent text-slate-400 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-200"
                                            }`}
                                        >
                                            <span>{category === "All" ? "./all" : `./${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}</span>
                                            <span className="text-xs">{count}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        <div className="px-4 py-5 sm:px-5 sm:py-6 md:px-7">
                            <div className="mb-4 flex flex-col gap-2 font-mono text-sm text-slate-300 md:mb-5 md:flex-row md:items-center md:justify-between">
                                <p className="break-words text-xs leading-6 sm:text-sm md:break-normal">
                                    <span className="text-emerald-300">$</span>{" "}
                                    {activeCategory === "All"
                                        ? "tree stack --depth 1"
                                        : `cat stack/${activeCategory.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                                </p>
                                <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">
                                    {filteredSkills.length} entries
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-[18px] border border-emerald-400/10 bg-[#050d15] sm:rounded-[22px]">
                                {activeCategory === "All" ? (
                                    <div className="grid gap-0 lg:grid-cols-2 xl:grid-cols-3">
                                        {groupedSkills.map((group, groupIndex) => (
                                            <div
                                                key={group.category}
                                                className={`px-4 py-4 md:px-5 ${
                                                    groupIndex === 0
                                                        ? "border-b border-emerald-400/10 lg:border-r lg:border-b-0 xl:border-r"
                                                        : groupIndex === 1
                                                          ? "border-b border-emerald-400/10 xl:border-r xl:border-b-0"
                                                          : ""
                                                }`}
                                            >
                                                <div className="mb-4 flex items-center justify-between border-b border-emerald-400/10 pb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-100/45 sm:text-[11px]">
                                                    <p>{group.category}</p>
                                                    <p>{group.items.length}</p>
                                                </div>

                                                <div className="grid gap-2">
                                                    {group.items.map((skill) => (
                                                        <div
                                                            key={skill.name}
                                                            className="flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] px-3 py-2.5 transition-colors duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/[0.08] sm:py-3"
                                                        >
                                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.08] text-emerald-300 sm:h-9 sm:w-9">
                                                                {skill.icon}
                                                            </span>
                                                            <span className="font-mono text-xs text-white sm:text-sm">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <div className="hidden grid-cols-[1.2fr_0.8fr] border-b border-emerald-400/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-100/45 md:grid md:px-6">
                                            <p>Technology</p>
                                            <p>Category</p>
                                        </div>

                                        <div className="grid gap-0">
                                            {filteredSkills.map((skill, index) => (
                                                <div
                                                    key={skill.name}
                                                    className={`grid gap-2 px-4 py-3 transition-colors duration-200 hover:bg-cyan-400/[0.08] sm:gap-3 sm:py-4 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-6 border-b border-emerald-400/10 ${
                                                        index === filteredSkills.length - 1 ? "border-b-0" : ""
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.08] text-emerald-300 sm:h-10 sm:w-10 sm:rounded-xl">
                                                            {skill.icon}
                                                        </span>
                                                        <span className="font-mono text-xs text-white sm:text-sm md:text-base">
                                                            {skill.name}
                                                        </span>
                                                    </div>

                                                    <div className="md:justify-self-start">
                                                        <span className="inline-flex w-fit rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200/80 sm:px-3 sm:text-xs">
                                                            {categoryMap[skill.name]}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
