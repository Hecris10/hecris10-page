import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getUserLocale } from "~/actions/locale";
import LetterPullup from "~/components/magicui/letter-pullup";
import { LinksSection } from "~/components/pages/about-me-page/links-section";
import { metadataSettings } from "~/config/metadata";
import { personalData } from "~/config/personal-data";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getUserLocale()) as keyof typeof metadataSettings.home.title;
    const title = metadataSettings.about.title[locale];
    const description = metadataSettings.about.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}
export default function About() {
    const content = useTranslations("AboutPage");
    const title = content("title");
    const firstParagraph = content("firstParagraph");
    const listTitle = content("listTitle");
    const list = content("list").split("\n");
    const paragraphs = content("paragraphs").split("\n");
    const { image, name } = personalData;

    return (
        <div className="w-full flex flex-col md:flex-row-reverse gap-2 md:gap-12">
            <section className="w-full">
                <Image
                    priority
                    src={image}
                    height={555}
                    width={555}
                    alt={`${name} image`}
                    className="rounded-lg"
                />
                <LinksSection className="hidden md:block" />
            </section>
            <section className="text-justify">
                <noscript>
                    <h1 className="my-1">{title}</h1>
                </noscript>

                <LetterPullup className="break-words my-1" words={title} delay={0.02} />
                <p className="text-zinc-500 dark:text-zinc-400">{firstParagraph}</p>
                <div className="mt-4">
                    <p className="font-bold">{listTitle}</p>
                    <ul className="list-disc ml-4 mt-1">
                        {list?.map((item, index) => (
                            <li
                                className="my-1 first:mb-1 first:mt-0 last:mb-0 last:mt-0 text-zinc-500 dark:text-zinc-400"
                                key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 flex flex-col flex-1 gap-3">
                    {paragraphs?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </section>
            <LinksSection className="block md:hidden" />
        </div>
    );
}
