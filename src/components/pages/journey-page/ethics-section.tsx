"use client";

import { useTranslations } from "next-intl";
import { AlertTriangle, Lightbulb, Scale, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const blockIcons = [AlertTriangle, Scale, Lightbulb, ShieldCheck] as const;

export function EthicsSection() {
    const t = useTranslations("JourneyPage");

    const blocks = [
        {
            icon: blockIcons[0],
            label: t("ethicsBlock1Label"),
            title: t("ethicsBlock1Title"),
            body: t("ethicsBlock1Body"),
        },
        {
            icon: blockIcons[1],
            label: t("ethicsBlock2Label"),
            title: t("ethicsBlock2Title"),
            body: t("ethicsBlock2Body"),
        },
        {
            icon: blockIcons[2],
            label: t("ethicsBlock3Label"),
            title: t("ethicsBlock3Title"),
            body: t("ethicsBlock3Body"),
        },
        {
            icon: blockIcons[3],
            label: t("ethicsBlock4Label"),
            title: t("ethicsBlock4Title"),
            body: t("ethicsBlock4Body"),
        },
    ];

    return (
        <section className="flex w-full flex-col items-center gap-14">
            <SectionHeading
                eyebrow={t("ethicsEyebrow")}
                title={t("ethicsHeading")}
                description={t("ethicsDescription")}
            />

            <Reveal className="w-full">
                <article className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
                    {/* Article header band */}
                    <div className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-br from-zinc-900 to-zinc-800 px-8 py-12 md:px-14 md:py-16 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900">
                        <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl" />
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-teal-300 backdrop-blur">
                            {t("ethicsCaseLabel")}
                        </span>
                        <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                            {t("ethicsCaseTitle")}
                        </h3>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                            {t("ethicsCaseSummary")}
                        </p>
                    </div>

                    {/* Article body */}
                    <div className="grid gap-x-12 gap-y-10 px-8 py-12 md:grid-cols-2 md:px-14 md:py-16">
                        {blocks.map((block, index) => {
                            const Icon = block.icon;
                            return (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
                                            {block.label}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                        {block.title}
                                    </h4>
                                    <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                                        {block.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </article>
            </Reveal>
        </section>
    );
}
