"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getInteralLinkOptions } from "~/config/internal-links";
import { cn } from "~/lib/utils";

export const NavInternalLinks = () => {
    const locale = useLocale();
    const internalLinks = getInteralLinkOptions(locale);
    const pathname = usePathname();

    return (
        <div className="hidden md:flex gap-4 align-middle ">
            {internalLinks?.map((link, index) => (
                <Link
                    prefetch
                    className={cn(
                        "flex relative justify-center items-center gap-1 overflow-hidden py-2 px-3 text-zinc-800 dark:text-zinc-300 font-['Roboto'] font-medium leading-6",
                        pathname === link.link && "font-bold"
                    )}
                    key={link.link}
                    href={link.link}>
                    {link.label}
                    <span className={cn(pathname === link.link ? "bottom-line" : "hidden")} />
                </Link>
            ))}
        </div>
    );
};
