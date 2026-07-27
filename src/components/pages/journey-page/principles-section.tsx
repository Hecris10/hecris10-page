"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { principles } from "./journey-data";
import { cardBase, SectionHeading, staggerContainer, staggerItem } from "./ui";

export function PrinciplesSection() {
    const t = useTranslations("JourneyPage");
    const principleKeys = [
        { titleKey: "principle1Title", descKey: "principle1Description" },
        { titleKey: "principle2Title", descKey: "principle2Description" },
        { titleKey: "principle3Title", descKey: "principle3Description" },
    ];

    return (
        <section className="flex w-full flex-col items-center gap-14">
            <SectionHeading
                eyebrow={t("principlesEyebrow")}
                title={t("principlesHeading")}
                description={t("principlesDescription")}
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid w-full gap-6 md:grid-cols-3">
                {principles.map((principle, idx) => {
                    const Icon = principle.icon;
                    const keys = principleKeys[idx];
                    return (
                        <motion.article
                            key={keys.titleKey}
                            variants={staggerItem}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            className={`${cardBase} group relative flex flex-col gap-5 overflow-hidden p-8 hover:border-teal-300/70 hover:shadow-xl dark:hover:border-teal-500/40`}>
                            {/* Hover glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-400/0 blur-2xl transition-all duration-500 group-hover:bg-teal-400/20" />

                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 text-teal-600 ring-1 ring-inset ring-teal-500/20 transition-transform duration-500 group-hover:scale-110 dark:text-teal-400">
                                <Icon className="h-7 w-7" strokeWidth={1.75} />
                            </div>

                            <h3 className="relative text-xl font-semibold text-zinc-900 dark:text-white">
                                {t(keys.titleKey)}
                            </h3>

                            <p className="relative text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {t(keys.descKey)}
                            </p>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
}
