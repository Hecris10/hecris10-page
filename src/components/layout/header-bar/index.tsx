import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getTranslations } from "next-intl/server";
import { getLocale } from "~/actions/locale";
import { getIcon } from "~/components/icons";
import { externalLinks } from "~/config/external-links";
import { personalData } from "~/config/personal-data";
import LanguageSelect from "./language-select";
import { MobileSideBarMenu } from "./mobile-sidebar-menu";
import { NavInternalLinks } from "./nav-internal-links";
import { ThemeToggle } from "./theme-toggle";

export const HeaderBar = async () => {
    const selectedLocale = await getLocale();
    const content = await getTranslations("HomePage");
    const title = content("title");
    const resumeLabel = content("resumeLink");

    return (
        <div className="w-full fixed border-b border-zinc-200 dark:border-zinc-700 shadow-md bg-white dark:bg-zinc-900 z-40">
            <div className=" flex justify-between py-3 px-4 w-full max-w-[1400px] mx-auto">
                <MobileSideBarMenu>
                    <AlignJustify className="my-auto" />
                </MobileSideBarMenu>
                <div className="flex gap-2 my-auto">
                    <Image
                        alt="Logo"
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/my-portifolio-397d6.appspot.com/o/projects%2Fportifolio-logo.jpeg?alt=media&token=22c1b9ec-b08f-4799-ac53-960063f36a77"
                        }
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px] my-auto"
                    />
                    <h3 className="font-bold my-auto md:hidden lg:block">{title}</h3>
                </div>
                <NavInternalLinks />
                <div className="flex gap-4 align-middle">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={personalData.resume}
                        className="my-auto hidden md:inline-flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-500 hover:text-white dark:text-teal-300 dark:hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="M12 18v-6" />
                            <path d="m9 15 3 3 3-3" />
                        </svg>
                        {resumeLabel}
                    </Link>
                    {externalLinks?.map((link, index) => (
                        <Link
                            target="_blank"
                            key={index}
                            href={link.link}
                            className="my-auto hidden md:block">
                            {getIcon(link.icon, "w-6 h-6 cursor-pointer")}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <div className="my-auto">
                        <LanguageSelect selectedLocale={selectedLocale} mode="long" />
                        <LanguageSelect selectedLocale={selectedLocale} mode="short" />
                    </div>
                </div>
            </div>
        </div>
    );
};
