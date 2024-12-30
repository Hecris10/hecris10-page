import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { EmailCard } from "~/components/cards/email-card";
import { SkillsCard } from "~/components/cards/skills-card";
import { WorkCard } from "~/components/cards/work-card";
import { CollapseTechnologies } from "~/components/collapse";
import { getIcon } from "~/components/icons";
import { BlogPosts } from "~/components/pages/home-page/blog-posts";
import { MainContent } from "~/components/pages/home-page/main-content/main-content";

import { TechCaroussel } from "~/components/tech-carrousel";
import { externalLinks } from "~/config/external-links";
import { metadataSettings } from "~/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getLocale()) as keyof typeof metadataSettings.home.title;
    const title = metadataSettings.home.title[locale];
    const description = metadataSettings.home.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}

export default function Home() {
    const content = useTranslations("HomePage");
    const introText = content("introText");
    return (
        <>
            <MainContent />
            <section className="w-full text-justify text-zinc-600 dark:text-zinc-400 my-1 flex flex-col gap-3">
                <p>{introText}</p>
                <div className="w-full flex gap-2">
                    {externalLinks?.map((link, index) => (
                        <Link target="_blank" key={index} href={link.link} className="my-auto">
                            {getIcon(link.icon, "w-6 h-6 cursor-pointer")}
                        </Link>
                    ))}
                </div>
            </section>
            <section className="flex flex-col lg:flex-row w-ful gap-6">
                <div className="w-full  md:w-full flex flex-col gap-6">
                    <CollapseTechnologies />
                    <div>
                        <TechCaroussel />
                        <Link
                            className="md:font-extrabold pt-4 px-8 md:px-1"
                            prefetch
                            href="/projects">
                            View Projects &rarr;
                        </Link>
                    </div>

                    <BlogPosts />
                </div>
                <div className="w-full lg:w-[40%] flex flex-col md:mt-10 gap-6 md:gap-6">
                    <div className="w-full flex flex-col md:flex-row lg:flex-col gap-6 md:gap-6">
                        <EmailCard />
                        <WorkCard />
                    </div>
                    <SkillsCard />
                </div>
            </section>
        </>
    );
}
