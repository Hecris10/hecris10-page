import { collection, getDocs } from "firebase/firestore";
import { db } from "~/lib/firebase";

function getDateTime(date: unknown) {
    if (!date) return 0;

    if (date instanceof Date) return date.getTime();

    if (typeof date === "string" || typeof date === "number") {
        return new Date(date).getTime();
    }

    if (typeof date === "object" && "toDate" in date && typeof date.toDate === "function") {
        return date.toDate().getTime();
    }

    return 0;
}

export async function getProjects(locale: string) {
    const projects = (await getDocs(collection(db, "projects"))).docs.map((doc) => {
        const data = doc.data() as FirestoreProject;

        return {
            ...data,
            id: doc.id,
            description: data.description[locale] ?? data.description.en ?? "",
        };
    });

    return projects.sort((a, b) => {
        if (a.order !== b.order) {
            return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
        }

        const dateDiff =
            getDateTime(b.publishedAt ?? b.createdAt ?? b.initialDate) -
            getDateTime(a.publishedAt ?? a.createdAt ?? a.initialDate);

        if (dateDiff !== 0) return dateDiff;

        return a.name.localeCompare(b.name, locale);
    });
}

export type Project = {
    id: string;
    description: string;
    createdAt?: unknown;
    image: string;
    initialDate?: unknown;
    link: string;
    name: string;
    order?: number;
    publishedAt?: unknown;
};

type FirestoreProject = Omit<Project, "id" | "description"> & {
    description: Record<string, string>;
};
