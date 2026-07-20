"use client";

import { motion } from "framer-motion";
import { growthCards } from "./journey-data";
import { cardBase, SectionHeading, staggerContainer, staggerItem } from "./ui";

function DetailRow({ label, children }: { label: string; children: string }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {label}
            </span>
            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                {children}
            </p>
        </div>
    );
}

export function GrowthSection() {
    return (
        <section className="flex w-full flex-col items-center gap-14">
            <SectionHeading
                eyebrow="Where I've grown"
                title="Professional Growth"
                description="Each of these chapters stretched me technically — and, just as importantly, shaped the person doing the work."
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid w-full gap-6 lg:grid-cols-3">
                {growthCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <motion.article
                            key={card.company}
                            variants={staggerItem}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            className={`${cardBase} group flex flex-col overflow-hidden hover:shadow-xl`}>
                            {/* Accent header */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${card.accent}`} />

                            <div className="flex flex-col gap-6 p-8">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-sm transition-transform duration-500 group-hover:scale-110`}>
                                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                            {card.company}
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                            {card.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {card.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                                    <DetailRow label="What I learned">{card.learned}</DetailRow>
                                    <DetailRow label="Professionally">
                                        {card.professionally}
                                    </DetailRow>
                                    <DetailRow label="Personally">{card.personally}</DetailRow>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
}
