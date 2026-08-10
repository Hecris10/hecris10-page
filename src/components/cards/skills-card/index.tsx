import { useTranslations } from "next-intl";
import { getLocale } from "~/actions/locale";
import { getIcon, Icons } from "~/components/icons";
import { cn } from "~/lib/utils";
import { getSkills } from "~/services/firestore/skills";

function getYearsSince(date: Date) {
    const today = new Date();
    let years = today.getFullYear() - date.getFullYear();
    const anniversaryThisYear = new Date(today.getFullYear(), date.getMonth(), date.getDate());

    if (today < anniversaryThisYear) years -= 1;

    return Math.max(years, 0);
}

function formatMonthYear(date: Date, locale: string) {
    return new Intl.DateTimeFormat(locale, {
        month: "short",
        year: "numeric",
    }).format(date);
}

export const SkillsCard = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const content = useTranslations("HomePage");
    const title = content("skillsCardTitle");
    const sinceLabel = content("skillSince");

    const locale = await getLocale();

    const skills = await getSkills();

    const skillsCalculated = skills?.map((skill) => {
        const initialDate = skill.initialDate.toDate();

        return {
            ...skill,
            experienceYears: getYearsSince(initialDate),
            initialDate,
        };
    });

    // Order by experience (oldest / most experienced first).
    const skillsOrdered = [...skillsCalculated].sort(
        (a, b) => a.initialDate.getTime() - b.initialDate.getTime()
    );

    return (
        <div className="rounded-lg w-full shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
            <div className="w-full flex gap-3">
                <Icons.bolt className={"text-zinc-400 dark:text-zinc-500 my-auto"} />{" "}
                <h3 className="my-auto">{title}</h3>
            </div>
            <div className="w-full mt-3 flex flex-col gap-4">
                {skillsOrdered.map((skill) => (
                    <div className="w-full flex flex-col gap-1.5" key={skill.id}>
                        <div className="w-full flex gap-4">
                            <div className=" border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-md rounded-full justify-center align-middle w-16 h-16 p-2">
                                {getIcon(
                                    skill.icon,
                                    cn("h-[46.5px] w-[46.5px] m-auto", skill.iconClassame)
                                )}
                            </div>
                            <div className="w-full flex flex-col justify-center gap-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                    <h4 className="font-bold">{skill.name}</h4>
                                    <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                                        {content("skillExperienceYears", {
                                            years: skill.experienceYears,
                                        })}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {sinceLabel} {formatMonthYear(skill.initialDate, locale)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
