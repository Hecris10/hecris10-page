"use client";

import { AlertTriangle, Lightbulb, Scale, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

interface Block {
    icon: typeof ShieldCheck;
    label: string;
    title: string;
    body: string;
}

const blocks: Block[] = [
    {
        icon: AlertTriangle,
        label: "What happened",
        title: "A breach — and then a cover-up",
        body: "In 2016, attackers reached the personal data of roughly 57 million Uber riders and drivers after finding cloud credentials that had been left in a private code repository. Rather than disclosing it, Uber paid the attackers $100,000 to quietly delete the data and stayed silent for about a year, disguising the payment as a routine bug bounty.",
    },
    {
        icon: Scale,
        label: "Why it was wrong",
        title: "The concealment, not just the mistake",
        body: "Breaches can happen to anyone; hiding one is a choice. Concealing it stripped millions of people of the chance to protect themselves, treated a security failure as a PR problem, and broke the basic trust users place in the software they rely on. It ultimately led to a $148 million settlement and a criminal conviction for the executive who orchestrated the cover-up.",
    },
    {
        icon: Lightbulb,
        label: "Lessons learned",
        title: "Transparency is part of the engineering",
        body: "Secrets don't belong in source control, security has to be designed in rather than bolted on, and honesty is not optional when something goes wrong. How an organization responds to a breach reveals its real values far more clearly than its mission statement ever could.",
    },
    {
        icon: ShieldCheck,
        label: "How I hope to respond",
        title: "The engineer I want to be",
        body: "If I'm ever close to a situation like this, I want to be the person who says the hard thing early — who reports the issue, protects the users first, and helps the team do the right thing even when it's costly. Competence keeps systems safe; character keeps them honest.",
    },
];

export function EthicsSection() {
    return (
        <section className="flex w-full flex-col items-center gap-14">
            <SectionHeading
                eyebrow="Ethical responsibility"
                title="Learning from Ethical Challenges"
                description="Studying where others went wrong is one of the clearest ways to decide the kind of engineer you want to be."
            />

            <Reveal className="w-full">
                <article className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
                    {/* Article header band */}
                    <div className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-br from-zinc-900 to-zinc-800 px-8 py-12 md:px-14 md:py-16 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900">
                        <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl" />
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-teal-300 backdrop-blur">
                            Case Study
                        </span>
                        <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                            The Uber Data Breach of 2016
                        </h3>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                            A story less about a technical failure and more about the choices a
                            company makes after one — and what those choices teach the rest of us
                            about integrity in software.
                        </p>
                    </div>

                    {/* Article body */}
                    <div className="grid gap-x-12 gap-y-10 px-8 py-12 md:grid-cols-2 md:px-14 md:py-16">
                        {blocks.map((block) => {
                            const Icon = block.icon;
                            return (
                                <div key={block.label} className="flex flex-col gap-3">
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
