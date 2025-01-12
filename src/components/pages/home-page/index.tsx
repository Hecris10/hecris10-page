import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { getUserLocale } from "~/actions/locale";
import { EmailCard } from "~/components/cards/email-card";
import { SkillsCard } from "~/components/cards/skills-card";
import { WorkCard } from "~/components/cards/work-card";
import { CollapseTechnologies } from "~/components/collapse";
import { TechCaroussel } from "~/components/tech-carrousel";
import { externalLinks } from "~/config/external-links";
import { getIcon } from "~/lib/utils";
import { BlogPosts } from "./blog-posts";

export const HomePage = async () => {
    const locale = await getUserLocale();
    const content = await getTranslations("HomePage");
    const viewProjectsLinkName = content("projectsLink");
    const introText = content("introText");

    return (
        <>
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
                    <CollapseTechnologies locale={locale} />
                    <div>
                        <TechCaroussel />
                        <Link
                            className="md:font-extrabold pt-4 px-8 md:px-1"
                            prefetch
                            href="/projects">
                            {viewProjectsLinkName} &rarr;
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
};
