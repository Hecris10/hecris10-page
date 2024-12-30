import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Post } from "~/components/pages/blog-page/blog-post";
import { PageProps } from "~/d";
import { getLocale } from "~/hooks/useGetLocale";
import { getPostById } from "~/services/firestore/blogs";

// export const dynamicParams = true;

// export async function generateStaticParams() {
//     const posts = await getBlogs("en");

//     return posts.map((post) => ({
//         slug: post.id,
//     }));
// }

export async function generateMetadata(
    { params, searchParams }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    console.log(params, searchParams);
    const postId = params.slug;
    const locale = getLocale();

    const post = await getPostById(postId, locale);

    console.log({
        title: `Helaman Ewerton | ${post?.title}`,
        description: "Blog page",
        locale: locale,
    });
    return { title: `Helaman Ewerton | ${post?.title}`, description: post?.short };
}

export default async function Blog({ params }: PageProps) {
    const locale = getLocale();
    const postId = params.slug;

    if (!postId) {
        notFound();
    }

    const post = await getPostById(postId, locale);

    if (!post) {
        notFound();
    }

    return <Post post={post} />;
}
