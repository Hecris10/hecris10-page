import { BlogShortCard } from "~/components/cards/blog-short-card";
import { useGetLocale } from "~/hooks/useGetLocale";
import { getLastThreeBlogPosts } from "~/services/firestore/blogs";

export const BlogPosts = async () => {
    const locale = useGetLocale();
    const posts = await getLastThreeBlogPosts(locale);

    return (
        <section>
            {posts.map((post) => (
                <BlogShortCard key={post.id} post={post} locale={locale} />
            ))}
        </section>
    );
};
