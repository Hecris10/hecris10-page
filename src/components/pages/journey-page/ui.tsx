"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

/** Shared easing that gives motion a soft, premium settle. */
export const easeOut = [0.21, 0.47, 0.32, 0.98] as const;

/** Base look for every rounded card on the page. */
export const cardBase =
    "rounded-3xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-500 dark:border-zinc-800 dark:bg-zinc-800/40";

/** Reusable teal → emerald text gradient. */
export const textGradient =
    "bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
}

/** Fade + rise element into view on scroll. */
export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-80px" }}
            transition={{ duration: 0.7, delay, ease: easeOut }}
            className={className}>
            {children}
        </motion.div>
    );
}

/** Container variants for staggered children reveals. */
export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

interface EyebrowProps {
    children: ReactNode;
    className?: string;
}

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400",
                className
            )}>
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-teal-500" />
            {children}
        </span>
    );
}

interface SectionHeadingProps {
    eyebrow: string;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
    className?: string;
}

/** Eyebrow + title + optional description, revealed together on scroll. */
export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <Reveal
            className={cn(
                "flex flex-col gap-4",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        "max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg dark:text-zinc-400",
                        align === "center" && "mx-auto"
                    )}>
                    {description}
                </p>
            )}
        </Reveal>
    );
}
