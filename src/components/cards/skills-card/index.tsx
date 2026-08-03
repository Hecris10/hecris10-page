import { useTranslations } from "next-intl";
import { getIcon, Icons } from "~/components/icons";
import { Progress } from "~/components/ui/progress";
import { cn } from "~/lib/utils";
import { getSkills } from "~/services/firestore/skills";

function getYearsSince(date: Date) {
    const today = new Date();
    let years = today.getFullYear() - date.getFullYear();
    const anniversaryThisYear = new Date(today.getFullYear(), date.getMonth(), date.getDate());

    if (today < anniversaryThisYear) years -= 1;

    return Math.max(years, 0);
}

export const SkillsCard = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const content = useTranslations("HomePage");
    const title = content("skillsCardTitle");

    const skills = await getSkills();

    // Step 1: Find the oldest skill's initialDate
    const oldestSkillDate = skills.reduce((oldestDate, skill) => {
        const skillDate = new Date(skill.initialDate.toDate()).getTime();
        return skillDate < oldestDate ? skillDate : oldestDate;
    }, new Date().getTime());

    // Step 2: Calculate the total time span from the oldest skill to now
    const totalTimeSpan = new Date().getTime() - oldestSkillDate;

    // Step 3: Calculate each skill's percentage
    const skillsCalculated = skills?.map((skill) => {
        const initialDate = skill.initialDate.toDate();
        const skillTimeSpan = new Date().getTime() - initialDate.getTime();
        const percentage = (skillTimeSpan / totalTimeSpan) * 100;

        return {
            ...skill,
            experienceYears: getYearsSince(initialDate),
            percentage: Math.floor(percentage),
        };
    });

    return (
        <div className="rounded-lg w-full shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
            <div className="w-full flex gap-3">
                <Icons.bolt className={"text-zinc-400 dark:text-zinc-500 my-auto"} />{" "}
                <h3 className="my-auto">{title}</h3>
            </div>
            <div className="w-full mt-3 flex flex-col gap-2">
                {skillsCalculated.map((skill) => (
                    <div className="w-full flex flex-col gap-2" key={skill.id}>
                        <div className="w-full flex gap-4">
                            <div className=" border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-md rounded-full justify-center align-middle w-16 h-16 w- p-2">
                                {getIcon(
                                    skill.icon,
                                    cn("h-[46.5px] w-[46.5px] m-auto", skill.iconClassame)
                                )}
                            </div>
                            <div className="w-full">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                    <h4 className="font-bold">{skill.name}</h4>
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                        {content("skillExperienceYears", {
                                            years: skill.experienceYears,
                                        })}
                                    </span>
                                </div>
                                <Progress
                                    className="h-[30px] [&>*]:bg-teal-700 shadow-lg bg-zinc-200 dark:bg-zinc-800 rounded-sm"
                                    value={skill.percentage}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
