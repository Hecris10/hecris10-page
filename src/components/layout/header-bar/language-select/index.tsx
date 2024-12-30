"use client";

import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { changeLocale } from "~/actions";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { localizations } from "~/config/localization";
import { cn } from "~/lib/utils";

export default function LanguageSelect({
    mode,
    className,
    selectedLocale,
}: {
    mode: "short" | "long";
    className?: string;
    selectedLocale: string;
}) {
    const locale = useLocale();
    const router = useRouter();
    const path = usePathname();
    const [isClient, setIsClient] = useState(false);

    const handleLang = async (lang: string) => {
        if (lang === locale) {
            router.push(path);
        }
        if (localizations.findIndex((l) => l.locale === lang) !== -1) {
            await changeLocale(lang);

            router.push(path);
        }
    };

    useEffect(() => {
        if (!isClient) setIsClient(true);
    }, [isClient]);

    if (!isClient)
        return (
            <div
                className={cn(
                    mode === "short" ? "flex md:hidden w-[70px]" : "hidden md:flex w-[120px]",
                    "border-none bg-transparent cursor-default  items-center gap-3 py-1 my-[6px] pl-3 w-ful"
                )}>
                <p className="text-sm text-left ml-0">
                    {mode === "long"
                        ? localizations.find((l) => l.locale === selectedLocale)?.label
                        : selectedLocale.toUpperCase()}
                </p>
                <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
        );

    return (
        <Select onValueChange={(e) => handleLang(e)} value={selectedLocale}>
            <SelectTrigger
                className={cn(
                    mode === "short" ? "flex md:hidden w-[70px]" : "hidden md:flex w-[120px]",
                    "border-none bg-transparent"
                )}
                id="framework">
                <SelectValue className="bg-transparent" />
            </SelectTrigger>
            <SelectContent
                className="bg-white dark:bg-black text-black dark:text-white"
                position="popper">
                {localizations?.map((lang) => (
                    <SelectItem key={lang.locale} value={lang.locale}>
                        {mode === "long" ? lang.label : lang.locale.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
