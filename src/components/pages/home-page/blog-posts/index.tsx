import { BlogShortCard } from "~/components/cards/blog-short-card";
import { getLocale } from "~/hooks/useGetLocale";
import { getLastThreeBlogPosts } from "~/services/firestore/blogs";

export const BlogPosts = async () => {
    const locale = getLocale();
    const posts = await getLastThreeBlogPosts(locale);

    return (
        <section>
            {posts.map((post) => (
                <BlogShortCard key={post.id} post={post} locale={locale} />
            ))}
        </section>
    );
};
