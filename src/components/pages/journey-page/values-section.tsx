"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { coreValues } from "./journey-data";
import { easeOut, Eyebrow, Reveal, staggerContainer, staggerItem } from "./ui";

export function ValuesSection() {
    return (
        <section className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — narrative */}
            <Reveal className="flex flex-col gap-6">
                <Eyebrow>The bigger picture</Eyebrow>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">
                    Software engineering is more than writing code
                </h2>
                <p className="text-base leading-relaxed text-zinc-500 md:text-lg dark:text-zinc-400">
                    The syntax is the easy part. The work that actually matters lives in the space
                    around the code — how we treat the people we build with, the honesty we bring to
                    hard trade-offs, and the care we take with the humans on the other side of the
                    screen.
                </p>
                <p className="text-base leading-relaxed text-zinc-500 md:text-lg dark:text-zinc-400">
                    Ethics, teamwork, communication, leadership, empathy, ownership, and a habit of
                    continuous improvement aren&rsquo;t &ldquo;soft&rdquo; skills to me. They are the
                    foundation that lets good engineering hold up under real-world weight.
                </p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {coreValues.map((value) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.label}
                                variants={staggerItem}
                                className="flex items-center gap-2.5 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-teal-300 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-200 dark:hover:border-teal-500/40">
                                <Icon className="h-4 w-4 shrink-0 text-teal-500" strokeWidth={2} />
                                {value.label}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Reveal>

            {/* Right — quote */}
            <motion.figure
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 p-10 text-white shadow-xl md:p-14">
                {/* decorative glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                <Quote className="h-12 w-12 text-white/40" strokeWidth={1.5} />
                <blockquote className="relative mt-6 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                    &ldquo;Technology has the greatest impact when it is built with competence,
                    integrity, and a genuine desire to serve others.&rdquo;
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-3 text-sm text-white/80">
                    <span className="h-px w-8 bg-white/50" />
                    A principle I try to build by
                </figcaption>
            </motion.figure>
        </section>
    );
}
