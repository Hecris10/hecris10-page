import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getUserLocale } from "~/actions/locale";
import { getPostById } from "~/services/firestore/blogs";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const slug = params.slug;
    const postId = slug;
    const locale = await getUserLocale();

    const post = await getPostById(postId, locale);

    return { title: `Helaman Ewerton | ${post?.title}`, description: post?.short };
}

export default async function Blog(props: PageProps) {
    const params = await props.params;
    const locale = await getUserLocale();
    const postId = params.slug;

    if (!postId) {
        notFound();
    }

    const post = await getPostById(postId, locale);

    if (!post) {
        notFound();
    }

    return (
        <div className="w-full">
            <h1>{post.title}</h1>
            <Image
                fetchPriority="high"
                priority
                src={post.image}
                alt={post.title}
                className="mx-auto"
                width={400}
                height={400}
            />
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="w-full flex justify-between">
                <p className="font-bold text-teal-600">{post.date}</p>
                <p className="font-bold text-teal-600">{"Helaman Ewerton"}</p>
            </div>
        </div>
    );
}
