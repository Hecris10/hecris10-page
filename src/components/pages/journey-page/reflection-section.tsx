"use client";

import { motion } from "framer-motion";
import { easeOut, Eyebrow, Reveal, textGradient } from "./ui";

const paragraphs = [
    "Ensign College taught me that growth is never only technical. Alongside the engineering, I learned to lead, to communicate clearly, and to tie my work to something bigger than a passing grade — a habit I hope to keep for the rest of my career.",
    "My internships turned theory into confidence. Shipping real features, alongside experienced engineers, into systems people actually depend on showed me that I belong in this work — and that I still have so much room to grow.",
    "So I intend to keep learning, on purpose and for good. New languages, better patterns, harder problems, and the wisdom of people further down the road than I am — curiosity is the one skill I never want to outgrow.",
    "Most of all, I want the technology I build to leave people better off: a little more connected, a little more capable, a little more trusting of the tools in their hands. That, to me, is what makes this career worth doing.",
];

export function ReflectionSection() {
    return (
        <section className="relative w-full overflow-hidden rounded-[2.5rem] border border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white px-6 py-20 md:px-14 md:py-28 dark:border-zinc-800/80 dark:from-zinc-900 dark:to-zinc-950">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/10" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <Reveal className="flex flex-col items-center gap-5">
                    <Eyebrow>Reflection</Eyebrow>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl dark:text-white">
                        Looking <span className={textGradient}>Forward</span>
                    </h2>
                </Reveal>

                <div className="mt-10 flex flex-col gap-6">
                    {paragraphs.map((paragraph, index) => (
                        <Reveal key={index} delay={index * 0.08}>
                            <p className="text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-300">
                                {paragraph}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                    className="mt-14 max-w-2xl text-balance text-2xl font-semibold leading-snug tracking-tight text-zinc-900 md:text-3xl dark:text-white">
                    &ldquo;I believe the best software engineers never stop learning, never stop
                    serving, and never stop{" "}
                    <span className={textGradient}>becoming better people</span>.&rdquo;
                </motion.blockquote>
            </div>
        </section>
    );
}
