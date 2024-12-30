import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "~/lib/firebase";
export interface BlogPostShort {
    id: string;
    title: string;
    short: string;
    date: string;
}

export interface BlogPostShortWithImage extends BlogPostShort {
    image: string;
}

export interface BlogPost extends BlogPostShort {
    image: string;
    body: string;
}

export async function getBlogs(locale: string) {
    return (await getDocs(collection(db, "blogs"))).docs.map((doc) => ({
        id: doc.id,
        // date: doc.data().createdAt,
        short: doc.data().short[locale],
        title: doc.data().title[locale],
        body: doc.data().body[locale],
        date: doc.data().createdAt.toDate().toLocaleDateString(locale),
    })) as BlogPost[];
}

export async function getBlogsByRange(locale: string, startRange: number, endRange: number) {
    return (
        (await getDocs(collection(db, "blogs"))).docs.map((doc) => ({
            id: doc.id,
            // date: doc.data().createdAt,
            short: doc.data().short[locale],
            title: doc.data().title[locale],
            image: doc.data().image,
            date: doc.data().createdAt.toDate().toLocaleDateString(locale),
        })) as BlogPostShortWithImage[]
    ).slice(startRange, endRange);
}

export async function getLastThreeBlogPosts(locale: string) {
    const blogsCollection = collection(db, "blogs");
    const blogsQuery = query(blogsCollection, limit(3), orderBy("createdAt", "desc"));

    try {
        const querySnapshot = await getDocs(blogsQuery);
        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title[locale],
                short: data.short[locale],
                date: data.createdAt.toDate().toLocaleDateString(locale),
            };
        }) as BlogPostShort[];
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

export const getPostById = async (id: string, locale: string): Promise<BlogPost | null> => {
    const doc = await getDocs(collection(db, "blogs"));
    const data = doc.docs.find((doc) => doc.id === id);

    if (!data) {
        return null;
    }

    const postData = data.data();

    return {
        ...postData,
        id: data.id,
        title: postData.title[locale],
        short: postData.short[locale],
        body: postData.body[locale],
        date: postData.createdAt.toDate().toLocaleDateString(locale),
    } as BlogPost;
};
