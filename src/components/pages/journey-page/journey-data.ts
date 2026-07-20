import {
    BookOpen,
    Compass,
    GraduationCap,
    HeartHandshake,
    Rocket,
    ShieldCheck,
    Sparkles,
    Users,
    type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Section 1 — Guiding Principles                                             */
/* -------------------------------------------------------------------------- */

export interface Principle {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const principles: Principle[] = [
    {
        icon: Compass,
        title: "Faith in Jesus Christ",
        description:
            "My faith is the compass I return to when decisions are hard and answers aren't obvious. It keeps me humble, invites me to keep growing, and reminds me that technology is never the point — the people it serves always are.",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description:
            "Software never stands still, and neither do I. Through curiosity, formal study, mentorship, and projects that stretch me, I try to end each day a slightly better engineer than I started it.",
    },
    {
        icon: ShieldCheck,
        title: "Integrity & Service",
        description:
            "Trust is the foundation of everything we build. Reliable software comes from acting honestly, respecting the people who use it, protecting their privacy, and choosing to build things that genuinely improve lives.",
    },
];

/* -------------------------------------------------------------------------- */
/*  Section 2 — Timeline                                                       */
/* -------------------------------------------------------------------------- */

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

export const timeline: TimelineItem[] = [
    {
        year: "2020",
        title: "Started Studying Web Development",
        description:
            "My first lines of HTML and CSS turned a passing curiosity into a craft. Building things people could actually open and use was the moment I knew what I wanted to do.",
    },
    {
        year: "2021",
        title: "BYU–Idaho",
        description:
            "Formal studies gave me the fundamentals — algorithms, data structures, and the discipline of writing code that others can read, trust, and maintain.",
    },
    {
        year: "2022",
        title: "Ensign College",
        description:
            "Where technical skill met purpose. I learned to pair engineering rigor with character, leadership, and a commitment to serve through the work I create.",
    },
    {
        year: "2023",
        title: "FamilySearch Software Engineering Internship",
        description:
            "My first taste of engineering at scale. Contributing to software used by millions taught me collaboration, code review, and the real weight of shipping to people.",
    },
    {
        year: "2024",
        title: "Grid Interface",
        description:
            "Building production interfaces where design, performance, and reliability all matter at once — and where every decision has a real user on the other side.",
    },
    {
        year: "2025",
        title: "Building QX Code",
        description:
            "Taking an idea from a blank file to a real product. Architecture, trade-offs, and ownership — learning what it truly means to carry something from zero to one.",
    },
    {
        year: "Next",
        title: "Future Goals",
        description:
            "To keep growing as an engineer and a leader — mentoring others, building technology that serves, and never losing the curiosity that started all of this.",
    },
];

/* -------------------------------------------------------------------------- */
/*  Section 3 — Professional Growth                                            */
/* -------------------------------------------------------------------------- */

export interface GrowthCard {
    company: string;
    role: string;
    accent: string; // tailwind gradient classes for the accent bar / icon
    icon: LucideIcon;
    technologies: string[];
    learned: string;
    professionally: string;
    personally: string;
}

export const growthCards: GrowthCard[] = [
    {
        company: "FamilySearch",
        role: "Software Engineering Intern",
        accent: "from-teal-500 to-emerald-500",
        icon: Users,
        technologies: ["React", "TypeScript", "Node.js", "REST APIs", "Git"],
        learned:
            "How large engineering teams actually operate — reading unfamiliar code, writing tests, giving and receiving code reviews, and shipping changes safely into a system relied on by millions.",
        professionally:
            "I gained the confidence to contribute to a mature codebase and learned that clear communication and humility matter every bit as much as technical skill.",
        personally:
            "Working on software that helps families connect across generations reminded me that engineering can be profoundly meaningful — not just clever.",
    },
    {
        company: "Grid Interface",
        role: "Software Engineer",
        accent: "from-sky-500 to-cyan-500",
        icon: Sparkles,
        technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        learned:
            "How to build and maintain production interfaces where performance, accessibility, and reliability are simply non-negotiable.",
        professionally:
            "I sharpened my ability to turn requirements into clean, maintainable components and to own features from first idea to production.",
        personally:
            "I learned patience and care for detail — that small, deliberate improvements compound into products people genuinely enjoy using.",
    },
    {
        company: "QX Code",
        role: "Founder & Engineer",
        accent: "from-violet-500 to-fuchsia-500",
        icon: Rocket,
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Cloud"],
        learned:
            "What it takes to design a product from scratch — the architecture decisions, the trade-offs, and the quiet discipline of actually finishing.",
        professionally:
            "I grew into a more complete engineer: product thinking, prioritization, and the courage to make good decisions with incomplete information.",
        personally:
            "Building something of my own taught me resilience — that real progress comes from showing up consistently, especially when it's hard.",
    },
];

/* -------------------------------------------------------------------------- */
/*  Section 4 — Values in Software Engineering                                 */
/* -------------------------------------------------------------------------- */

export interface CoreValue {
    icon: LucideIcon;
    label: string;
}

export const coreValues: CoreValue[] = [
    { icon: ShieldCheck, label: "Ethics" },
    { icon: Users, label: "Teamwork" },
    { icon: Compass, label: "Communication" },
    { icon: Sparkles, label: "Leadership" },
    { icon: HeartHandshake, label: "Empathy" },
    { icon: GraduationCap, label: "Ownership" },
];

/* -------------------------------------------------------------------------- */
/*  Section 7 — References                                                     */
/* -------------------------------------------------------------------------- */

export interface Reference {
    source: string;
    detail: string;
}

export const references: Reference[] = [
    {
        source: "Doctrine & Covenants 58:27–28",
        detail: "On choosing to act with initiative and to do good of one's own free will — a reminder that ownership and agency shape everything we build.",
    },
    {
        source: "Proverbs 3:5–6",
        detail: "On trust and humility when the path forward isn't clear — a principle I lean on when engineering decisions carry real weight.",
    },
    {
        source: "General Conference addresses",
        detail: "Talks on integrity, service, and lifelong learning that quietly shaped how I try to show up in my work and with the people around me.",
    },
];
