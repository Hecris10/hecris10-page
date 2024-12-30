import { collection, getDocs } from "firebase/firestore";
import { db } from "~/lib/firebase";

export async function getProjects(locale: string) {
    return (await getDocs(collection(db, "projects"))).docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Project),
        description: doc.data().description[locale],
    }));
}

export type Project = {
    description: string;
    image: string;
    link: string;
    name: string;
};
