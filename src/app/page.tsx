import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "~/actions/locale";
import { HomePage } from "~/components/pages/home-page";
import { MainContent } from "~/components/pages/home-page/main-content/main-content";

import { metadataSettings } from "~/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getUserLocale()) as keyof typeof metadataSettings.home.title;
    const title = metadataSettings.home.title[locale];
    const description = metadataSettings.home.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}

export default async function Home() {
    const content = await getTranslations("HomePage");
    const viewProjectsLinkName = content("projectsLink");
    const introText = content("introText");

    return (
        <>
            <MainContent />
            <HomePage />
        </>
    );
}
