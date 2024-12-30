"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { Icons } from "~/components/icons";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "~/components/ui/sheet";
import { getInteralLinkOptions } from "~/config/internal-links";
import { cn } from "~/lib/utils";

export const MobileSideBarMenu = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const locale = useLocale();
    const content = useTranslations("HomePage");
    const internalLinks = getInteralLinkOptions(locale);
    const title = content("title");

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
                </div>
            </SheetContent>
        </Sheet>
    );
};
