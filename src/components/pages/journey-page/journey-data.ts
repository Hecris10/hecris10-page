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
}

export const principles: Principle[] = [
    { icon: Compass },
    { icon: BookOpen },
    { icon: ShieldCheck },
];

/* -------------------------------------------------------------------------- */
/*  Section 2 — Timeline                                                       */
/* -------------------------------------------------------------------------- */

// Timeline has 7 entries, all text comes from i18n keys:
// timeline{1-7}Year, timeline{1-7}Title, timeline{1-7}Description
export const timelineCount = 7;

/* -------------------------------------------------------------------------- */
/*  Section 3 — Professional Growth                                            */
/* -------------------------------------------------------------------------- */

export interface GrowthCard {
    accent: string; // tailwind gradient classes for the accent bar / icon
    icon: LucideIcon;
}

export const growthCards: GrowthCard[] = [
    {
        accent: "from-teal-500 to-emerald-500",
        icon: Users,
    },
    {
        accent: "from-sky-500 to-cyan-500",
        icon: Sparkles,
    },
    {
        accent: "from-violet-500 to-fuchsia-500",
        icon: Rocket,
    },
];

/* -------------------------------------------------------------------------- */
/*  Section 4 — Values in Software Engineering                                 */
/* -------------------------------------------------------------------------- */

export interface CoreValue {
    icon: LucideIcon;
}

export const coreValues: CoreValue[] = [
    { icon: ShieldCheck },
    { icon: Users },
    { icon: Compass },
    { icon: Sparkles },
    { icon: HeartHandshake },
    { icon: GraduationCap },
];

/* -------------------------------------------------------------------------- */
/*  Section 7 — References                                                     */
/* -------------------------------------------------------------------------- */

// References has 3 entries, all text comes from i18n keys:
// reference{1-3}Source, reference{1-3}Detail
export const referencesCount = 3;
