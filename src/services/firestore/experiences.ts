import { collection, getDoc, getDocs } from "firebase/firestore";
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

export async function getExperiences(locale: string) {
    const experiencesSnapshot = await getDocs(collection(db, "experiences"));
    const experiences = await Promise.all(
        experiencesSnapshot.docs.map(async (docSnapshot) => {
            const experienceData = docSnapshot.data();
            // Fetch the referenced company document
            const companyRef = experienceData.company;
            const companySnapshot = await getDoc(companyRef);
            const companyData: any = companySnapshot.exists()
                ? companySnapshot.data()
                : { name: "Unknown" };

            return {
                ...experienceData,
                id: docSnapshot.id,
                company: companyData.name,
                initialDate: experienceData.initialDate,
                finalDate: experienceData.finalDate,
                image: companyData.image,
                isCurrent: experienceData.isCurrent,
                title: experienceData.title[locale],
            };
        })
    );

    // Order by initial date desc, but if isCurrent is true, put it first.
    return experiences.sort((a, b) => {
        if (a.isCurrent !== b.isCurrent) return a.isCurrent ? -1 : 1;

        return getDateTime(b.initialDate) - getDateTime(a.initialDate);
    });
}

export type WorkExperienceItem = {
    id: string;
    title: string;
    company: string;
    initialDate: unknown;
    finalDate?: unknown;
    image: string;
    isCurrent: boolean;
};
