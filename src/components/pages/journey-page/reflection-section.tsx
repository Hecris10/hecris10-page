"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { easeOut, Eyebrow, Reveal, textGradient } from "./ui";

export function ReflectionSection() {
    const t = useTranslations("JourneyPage");

    const paragraphs = [
        t("reflectionParagraph1"),
        t("reflectionParagraph2"),
        t("reflectionParagraph3"),
        t("reflectionParagraph4"),
    ];

    return (
        <section className="relative w-full overflow-hidden rounded-[2.5rem] border border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white px-6 py-20 md:px-14 md:py-28 dark:border-zinc-800/80 dark:from-zinc-900 dark:to-zinc-950">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/10" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <Reveal className="flex flex-col items-center gap-5">
                    <Eyebrow>{t("reflectionEyebrow")}</Eyebrow>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl dark:text-white">
                        {t("reflectionHeadingPrefix")} <span className={textGradient}>{t("reflectionHeadingHighlight")}</span>
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
                    &ldquo;{t("reflectionQuoteStart")}{" "}
                    <span className={textGradient}>{t("reflectionQuoteHighlight")}</span>.&rdquo;
                </motion.blockquote>
            </div>
        </section>
    );
}
