import { Metadata } from "next";
import { getLocale, getUserLocale } from "~/actions/locale";
import { ProjectsTimeline } from "~/components/pages/projects-page/projects-timeline";
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

    return <ProjectsTimeline projects={projects} locale={locale} />;
}
