import { FileText, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { getIcon } from "~/components/icons";
import { externalLinks } from "~/config/external-links";
import { personalData } from "~/config/personal-data";
import { cn } from "~/lib/utils";

export const LinksSection = ({ className }: { className?: string }) => {
    const content = useTranslations("AboutPage");
    const githubText = content("githubText");
    const linkedinText = content("linkedinText");
    const resumeText = content("resumeText");
    const email = personalData.email;
    const emailLink = `mailto:${email}`;
    return (
        <div className={cn(className)}>
            <section className="flex flex-col gap-3 md:gap-6 py-4 md:my-6 border-b border-zinc-200 dark:border-zinc-800">
                {externalLinks?.map((link, index) => (
                    <Link
                        target="_blank"
                        key={index}
                        href={link.link}
                        className="my-auto flex gap-2">
                        {getIcon(link.icon, "w-6 h-6 cursor-pointer")}
                        <p>
                            {link.icon === "github"
                                ? githubText
                                : link.icon === "linkedin"
                                ? linkedinText
                                : ""}
                        </p>
                    </Link>
                ))}
            </section>
            <section className="flex flex-col gap-3 mt-3 md:mt-8">
                <Link className="flex gap-3" href={emailLink}>
                    <Mail className="text-zinc-400 dark:text-zinc-500 my-auto" />
                    <p>{email}</p>
                </Link>
                <Link
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white py-2.5 px-4 text-sm font-semibold text-zinc-800 transition-colors hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-teal-500/60 dark:hover:bg-teal-500/10 dark:hover:text-teal-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={personalData.resume}>
                    <FileText className="h-4 w-4" strokeWidth={2} />
                    {resumeText}
                </Link>
            </section>
        </div>
    );
};
