import { BriefcaseBusiness } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useGetLocale } from "~/hooks/useGetLocale";
import { getExperiences } from "~/services/firestore/experiences";

export const WorkCard = async () => {
    const locale = useGetLocale();
    const content = useTranslations("HomePage");
    const title = content("workCardTitle");

    const workExperiences = await getExperiences(locale);

    return (
        <div className="rounded-lg w-full shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
            <div className="w-full flex gap-3">
                <BriefcaseBusiness className="text-zinc-400 dark:text-zinc-500 my-auto" />{" "}
                <h3 className="my-auto">{title}</h3>
            </div>
            <div className="w-full mt-3 flex flex-col gap-2">
                {workExperiences?.map((experience, index) => (
                    <div className="w-full flex flex-col gap-2" key={index}>
                        <div className="w-full flex gap-4" key={experience.company}>
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
                            <div>
                                <h4 className="font-bold">{experience.company}</h4>
                                <p className="text-zinc-500 text-md dark:text-zinc-400">
                                    {experience.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
