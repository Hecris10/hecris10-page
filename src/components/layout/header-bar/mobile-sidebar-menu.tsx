"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { Icons } from "~/components/icons";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "~/components/ui/sheet";
import { personalData } from "~/config/personal-data";
import { getInteralLinkOptions } from "~/config/internal-links";
import { cn } from "~/lib/utils";

export const MobileSideBarMenu = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const locale = useLocale();
    const content = useTranslations("HomePage");
    const internalLinks = getInteralLinkOptions(locale);
    const title = content("title");
    const resumeLabel = content("resumeLink");

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <Sheet onOpenChange={(value) => setOpen(value)} open={open}>
            <SheetTrigger onClick={onOpen} className="md:hidden">
                {children}
            </SheetTrigger>
            <SheetContent
                side="left"
                sheetOveralayClassName="md:hidden"
                className="md:hidden bg-white dark:bg-zinc-800 shadow-xl">
                <SheetHeader className="flex gap-2 my-auto">
                    <div className="flex gap-2 my-auto">
                        <Icons.logo className="h-6 w-6 my-auto" />
                        <h3 className="font-bold md:hidden lg:block">{title}</h3>
                    </div>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6">
                    {internalLinks?.map((link) => (
                        <Link
                            onClick={onClose}
                            className={cn(
                                "flex relative text-lg justify-center items-center gap-1 overflow-hidden py-2 px-3 text-zinc-800 dark:text-zinc-300 font-['Roboto'] font-medium leading-6",
                                pathname === link.link && "font-bold text-zinc-900 underline"
                            )}
                            key={link.link}
                            href={link.link}>
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        onClick={onClose}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={personalData.resume}
                        className="mt-2 inline-flex justify-center items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 py-2 px-4 text-base font-semibold text-teal-700 transition-colors hover:bg-teal-500 hover:text-white dark:text-teal-300 dark:hover:text-white">
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
                </div>
            </SheetContent>
        </Sheet>
    );
};
