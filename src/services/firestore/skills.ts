import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "~/lib/firebase";

export async function getSkills() {
    return (await getDocs(collection(db, "skills"))).docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Skill),
    }));
}

export type Skill = {
    name: string;
    initialDate: Timestamp;
    icon: string;
    iconClassame: string;
};
