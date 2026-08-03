import { BriefcaseBusiness } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { getLocale } from "~/actions/locale";
import { getExperiences } from "~/services/firestore/experiences";

function getDate(date: unknown) {
    if (!date) return null;

    if (date instanceof Date) return date;

    if (typeof date === "string" || typeof date === "number") {
        const parsedDate = new Date(date);
        return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
    }

    if (typeof date === "object" && "toDate" in date && typeof date.toDate === "function") {
        return date.toDate();
    }

    return null;
}

function formatMonthYear(date: unknown, locale: string) {
    const parsedDate = getDate(date);

    if (!parsedDate) return "";

    return new Intl.DateTimeFormat(locale, {
        month: "short",
        year: "numeric",
    }).format(parsedDate);
}

export const WorkCard = async () => {
    const locale = await getLocale();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const content = await getTranslations("HomePage");
    const title = content("workCardTitle");
    const currentLabel = content("currentBadge");

    const workExperiences = await getExperiences(locale);

    return (
        <div className="rounded-lg w-full shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
            <div className="w-full flex gap-3">
                <BriefcaseBusiness className="text-zinc-400 dark:text-zinc-500 my-auto" />{" "}
                <h3 className="my-auto">{title}</h3>
            </div>
            <div className="w-full mt-3 flex flex-col gap-2">
                {workExperiences?.map((experience) => {
                    const startDate = formatMonthYear(experience.initialDate, locale);
                    const endDate = experience.isCurrent
                        ? currentLabel
                        : formatMonthYear(experience.finalDate, locale);
                    const dateRange = [startDate, endDate].filter(Boolean).join(" - ");

                    return (
                        <div className="w-full flex flex-col gap-2" key={experience.id}>
                            <div className="w-full flex gap-4">
                                <div className=" border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-md rounded-full justify-center align-middle w-16 h-16 p-2">
                                    <Image
                                        priority
                                        className="rounded-full"
                                        alt={experience.company}
                                        width={46.4}
                                        height={46.4}
                                        src={experience.image}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h4 className="font-bold">{experience.company}</h4>
                                        {experience.isCurrent && (
                                            <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-semibold text-teal-700 dark:text-teal-300">
                                                {currentLabel}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-zinc-500 text-md dark:text-zinc-400">
                                        {experience.title}
                                    </p>
                                    {dateRange && (
                                        <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                            {dateRange}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
