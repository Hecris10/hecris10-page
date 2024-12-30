import { useLocale } from "next-intl";
import Link from "next/link";
import { getInteralLinkOptions } from "~/config/internal-links";

export const FooterBar = () => {
    const locale = useLocale();
    const internalLinks = getInteralLinkOptions(locale);
    const today = new Date();

    const thisYear = today.getFullYear();

    return (
        <div className="w-full border-b border-slate-200 dark:border-slate-700 shadow-lg h-[100px]">
            <div className="flex flex-col md:flex-row py-3 px-4 w-full max-w-[1400px] mx-auto">
                <div className="flex justify-evenly md:justify-start md:gap-6 w-full mb-2">
                    {internalLinks?.map((link, index) => (
                        <Link
                            prefetch
                            className="my-auto"
                            href={link.link}
                            key={link.link}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <p className="text-center my-auto min-w-[200px] text-slate-400 dark:text-slate-600">{`©${thisYear} Helaman Ewerton`}</p>
            </div>
        </div>
    );
};
