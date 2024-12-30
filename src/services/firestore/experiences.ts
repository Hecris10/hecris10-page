import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "~/lib/firebase";

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
                finalDate: experienceData.finalDate,
                image: companyData.image,
                isCurrent: experienceData.isCurrent,
                title: experienceData.title[locale],
            };
        })
    );
    //order by initial date desc, but if isCurrent is true, put it first
    return experiences.sort((a, b) => {
        if (a.isCurrent) return -1;
        if (b.isCurrent) return 1;
        return new Date(b.finalDate).getTime() - new Date(a.finalDate).getTime();
    });
}

export type WorkExperienceItem = {
    title: string;
    company: string;
    initialDate: string;
    finalDate?: string;
    image: string;
    isCurrent: boolean;
};
