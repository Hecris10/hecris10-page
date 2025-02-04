import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getLocale } from "~/actions/locale";
import { MemoIconClouds } from "~/components/icons-cloud";
import LetterPullup from "~/components/magicui/letter-pullup";
import { metadataSettings } from "~/config/metadata";
import { uses } from "~/config/uses";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getLocale()) as keyof typeof metadataSettings.home.title;
    const title = metadataSettings.uses.title[locale];
    const description = metadataSettings.uses.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}

export default function Uses() {
    const content = useTranslations("UsesPage");
    const title = content("title");
    const subtitle = content("subtitle");

    const locale = useLocale() as keyof (typeof uses)[0]["items"][0]["description"];

    return (
        <div className="w-full">
            <section className="text-left w-full">
                <div className="ml-0 flex">
                    <LetterPullup words={title} className="my-1" />
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-justify">{subtitle}</p>
            </section>

            <div className="w-full flex flex-col md:flex-row-reverse">
                <MemoIconClouds />
                <section className="w-full">
                    {uses.map((section, index) => (
                        <div key={index} className="my-4 md:flex md:gap-16">
                            <h2 className="my-2">{section.sectionName}</h2>
                            <ul className="list-disc list-inside">
                                {section.items.map((item, index) => (
                                    <li key={index} className="my-2 md:list-none">
                                        <Link
                                            className="text-teal-600 text-lg bold"
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer">
                                            {item.name}
                                        </Link>
                                        <p className="text-zinc-500 dark:text-zinc-400 pl-6 md:pl-0">
                                            {item.description[locale]}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
