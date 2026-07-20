"use client";

import { EthicsSection } from "./ethics-section";
import { GrowthSection } from "./growth-section";
import { HeroSection } from "./hero-section";
import { PrinciplesSection } from "./principles-section";
import { ReferencesSection } from "./references-section";
import { ReflectionSection } from "./reflection-section";
import { TimelineSection } from "./timeline-section";
import { ValuesSection } from "./values-section";

export function JourneyPage() {
    return (
        <div className="flex w-full flex-col gap-24 py-2 md:gap-36 md:py-6">
            <HeroSection />
            <PrinciplesSection />
            <TimelineSection />
            <GrowthSection />
            <ValuesSection />
            <EthicsSection />
            <ReflectionSection />
            <ReferencesSection />
        </div>
    );
}
