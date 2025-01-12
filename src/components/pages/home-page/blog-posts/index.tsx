import { getUserLocale } from "~/actions/locale";
import { BlogShortCard } from "~/components/cards/blog-short-card";
import { getLastThreeBlogPosts } from "~/services/firestore/blogs";

export const BlogPosts = async () => {
    const locale = await getUserLocale();
    const posts = await getLastThreeBlogPosts(locale);

    return (
        <section>
            {posts.map((post) => (
                <BlogShortCard key={post.id} post={post} locale={locale} />
            ))}
        </section>
    );
};
