"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { easeOut, textGradient } from "./ui";

/** Softly drifting gradient blob used in the hero background. */
function Blob({
    className,
    delay = 0,
}: {
    className: string;
    delay?: number;
}) {
    return (
        <motion.div
            aria-hidden
            className={className}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
                opacity: 0.7,
                scale: [0.85, 1.05, 0.95, 0.85],
                x: [0, 24, -18, 0],
                y: [0, -20, 16, 0],
            }}
            transition={{
                opacity: { duration: 1.4, ease: easeOut },
                scale: { duration: 18, repeat: Infinity, ease: "easeInOut", delay },
                x: { duration: 18, repeat: Infinity, ease: "easeInOut", delay },
                y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay },
            }}
        />
    );
}

export function HeroSection() {
    return (
        <section className="relative flex min-h-[78vh] w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white px-6 py-24 dark:border-zinc-800/80 dark:from-zinc-900 dark:to-zinc-950">
            {/* Animated gradient background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <Blob
                    className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-teal-400/30 blur-3xl dark:bg-teal-500/20"
                    delay={0}
                />
                <Blob
                    className="absolute -right-16 top-20 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-500/15"
                    delay={3}
                />
                <Blob
                    className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10"
                    delay={6}
                />
                {/* Subtle grid overlay */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 backdrop-blur dark:border-zinc-700/80 dark:bg-white/5 dark:text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    A personal reflection
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                    className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl dark:text-white">
                    My <span className={textGradient}>Journey</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: easeOut }}
                    className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-300">
                    The experiences, principles, and values that continue shaping me as a software
                    engineer, leader, and lifelong learner.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-14 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500">
                    <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
                    <motion.span
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                        <ArrowDown className="h-4 w-4" />
                    </motion.span>
                </motion.div>
            </div>
        </section>
    );
}
