"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";
import { timelineCount } from "./journey-data";
import { cardBase, easeOut, SectionHeading } from "./ui";

function TimelineEntry({
    index,
    year,
    title,
    description,
}: {
    index: number;
    year: string;
    title: string;
    description: string;
}) {
    const isLeft = index % 2 === 0;

    return (
        <div className="relative flex w-full md:justify-normal">
            {/* Node on the line */}
            <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
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
                <div className={`${cardBase} p-6 hover:shadow-lg md:p-7`}>
                    <span className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        {year}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-zinc-900 md:text-xl dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export function TimelineSection() {
    const t = useTranslations("JourneyPage");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 60%", "end 60%"],
    });
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.6 });
    const glowY = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    // Pull each timeline entry's translated title + description from i18n.
    const i18nFields = Array.from({ length: timelineCount }, (_, i) => {
        const n = i + 1;
        return {
            year: t(`timeline${n}Year` as never),
            title: t(`timeline${n}Title` as never),
            description: t(`timeline${n}Description` as never),
        };
    });

    return (
        <section className="flex w-full flex-col items-center gap-16">
            <SectionHeading
                eyebrow={t("timelineEyebrow")}
                title={t("timelineHeading")}
                description={t("timelineDescription")}
            />

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

                <div className="flex flex-col gap-12 md:gap-16">
                    {i18nFields.map((entry, index) => (
                        <TimelineEntry
                            key={index}
                            index={index}
                            year={entry.year}
                            title={entry.title}
                            description={entry.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
