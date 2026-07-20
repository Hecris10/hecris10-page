"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
import { references } from "./journey-data";
import { easeOut, staggerContainer, staggerItem } from "./ui";

export function ReferencesSection() {
    return (
        <section className="flex w-full flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    <BookMarked className="h-4 w-4" strokeWidth={1.75} />
                    References
                </span>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    A few sources that have quietly shaped the way I think about work, character, and
                    the responsibility that comes with building things for other people.
                </p>
            </motion.div>

            <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col divide-y divide-zinc-100 border-y border-zinc-100 dark:divide-zinc-800 dark:border-zinc-800">
                {references.map((reference) => (
                    <motion.li
                        key={reference.source}
                        variants={staggerItem}
                        className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:gap-6">
                        <span className="w-full shrink-0 font-medium text-zinc-900 sm:w-64 dark:text-zinc-100">
                            {reference.source}
                        </span>
                        <span className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                            {reference.detail}
                        </span>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}
