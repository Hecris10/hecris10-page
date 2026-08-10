"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { cn } from "~/lib/utils";
import { getProjectDate } from "~/lib/date-utils";
import type { Project } from "~/services/firestore/projects";
import { easeOut } from "~/components/pages/journey-page/ui";

interface ProjectsTimelineProps {
    projects: Project[];
    locale: string;
}

function formatMonthYear(date: Date, locale: string) {
    return new Intl.DateTimeFormat(locale, {
        month: "short",
        year: "numeric",
    }).format(date);
}

function TimelineEntry({
    project,
    index,
    locale,
    presentLabel,
}: {
    project: Project;
    index: number;
    locale: string;
    presentLabel: string;
}) {
    const isLeft = index % 2 === 0;
    const date = getProjectDate(project);
    const dateLabel = date ? formatMonthYear(date, locale) : presentLabel;

    return (
        <div className="relative flex w-full md:justify-normal">
            {/* Node on the line */}
            <div className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2">
                <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="block h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-teal-500 to-emerald-500 shadow-[0_0_0_4px_rgba(20,184,166,0.15)] dark:border-zinc-950"
                />
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: easeOut }}
                className={cn(
                    "ml-12 w-full md:ml-0 md:w-[calc(50%-2.5rem)]",
                    isLeft ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                )}>
                <div className="relative flex flex-col gap-2 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-800/40 md:p-7">
                    <span className="inline-flex w-fit items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        {dateLabel}
                    </span>

                    <div
                        className={cn(
                            "mt-1 flex items-center gap-3",
                            isLeft && "md:flex-row-reverse"
                        )}>
                        <div className="shrink-0 overflow-hidden border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-md rounded-full w-14 h-14 p-1.5">
                            <Image
                                alt={`${project.name} image`}
                                width={100}
                                height={100}
                                src={project.image}
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <h2 className="font-bold text-zinc-900 dark:text-white">
                            {project.name}
                        </h2>
                    </div>

                    <p className="text-justify text-zinc-700 dark:text-zinc-400">
                        {`${project.description.slice(0, 450)}${
                            project.description.length > 450 ? "..." : ""
                        }`}
                    </p>

                    <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-400">
                        <div className="shrink-0 pt-0.5">
                            <LinkIcon className="w-[18px] h-[18px]" />
                        </div>
                        <div className="min-w-0">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="break-all transition-colors hover:text-teal-600 dark:hover:text-teal-400">
                                {project.link}
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function ProjectsTimeline({ projects, locale }: ProjectsTimelineProps) {
    const t = useTranslations("ProjectsPage");
    const presentLabel = t("present");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 60%", "end 60%"],
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.6,
    });
    const glowY = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    return (
        <section className="flex w-full flex-col items-center gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="flex flex-col items-center gap-3 text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                    <span className="h-px w-6 bg-gradient-to-r from-transparent to-teal-500" />
                    {t("timelineEyebrow")}
                </span>
                <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
                    {t("timelineHeading")}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg dark:text-zinc-400">
                    {t("timelineDescription")}
                </p>
            </motion.div>

            <div ref={containerRef} className="relative w-full max-w-4xl">
                {/* Static track */}
                <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-zinc-200 md:left-1/2 dark:bg-zinc-800" />
                {/* Animated fill */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-4 top-0 h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-teal-500 via-emerald-500 to-cyan-500 md:left-1/2"
                />
                {/* Traveling glow dot */}
                <motion.div
                    style={{ top: glowY }}
                    className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 opacity-80 blur-[2px] md:left-1/2"
                />

                <div className="flex flex-col gap-10 md:gap-12">
                    {projects.map((project, index) => (
                        <TimelineEntry
                            key={project.id}
                            project={project}
                            index={index}
                            locale={locale}
                            presentLabel={presentLabel}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
