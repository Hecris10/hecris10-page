import { AlignJustify } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "~/../public/assets/logo/Gemini_Generated_Image_tq8hpwtq8hpwtq8h_processed.jpeg";
import { getIcon } from "~/components/icons";
import { externalLinks } from "~/config/external-links";
import { useGetLocale } from "~/hooks/useGetLocale";
import LanguageSelect from "./language-select";
import { MobileSideBarMenu } from "./mobile-sidebar-menu";
import { NavInternalLinks } from "./nav-internal-links";
import { ThemeToggle } from "./theme-toggle";

export const HeaderBar = () => {
    const selectedLocale = useGetLocale();
    const content = useTranslations("HomePage");
    const title = content("title");

    return (
        <div className="w-full fixed border-b border-zinc-200 dark:border-zinc-700 shadow-md bg-white dark:bg-zinc-900 z-40">
            <div className=" flex justify-between py-3 px-4 w-full max-w-[1400px] mx-auto">
                <MobileSideBarMenu>
                    <AlignJustify className="my-auto" />
                </MobileSideBarMenu>
                <div className="flex gap-2 my-auto">
                    <Image
                        alt="Logo"
                        src={LogoImage.src}
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px] my-auto"
                    />
                    <h3 className="font-bold my-auto md:hidden lg:block">{title}</h3>
                </div>
                <NavInternalLinks />
                <div className="flex gap-4 align-middle">
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
