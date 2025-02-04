import { Metadata } from "next";
import { getLocale, getUserLocale } from "~/actions/locale";
import { ProjectCard } from "~/components/cards/project-card";
import { metadataSettings } from "~/config/metadata";
import { getProjects } from "~/services/firestore/projects";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getLocale()) as keyof typeof metadataSettings.home.title;
    const title = metadataSettings.projects.title[locale];
    const description = metadataSettings.projects.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}

export default async function Projects() {
    const locale = await getUserLocale();
    const projects = await getProjects(locale);

    return (
        <div className="w-full flex flex-wrap flex-col md:flex-row">
            {projects.map((project, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    );
}
