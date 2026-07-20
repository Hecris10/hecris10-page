import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { JourneyPage } from "~/components/pages/journey-page";
import { metadataSettings } from "~/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getLocale()) as keyof typeof metadataSettings.journey.title;
    const title = metadataSettings.journey.title[locale];
    const description = metadataSettings.journey.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}

export default function Journey() {
    return <JourneyPage />;
}
