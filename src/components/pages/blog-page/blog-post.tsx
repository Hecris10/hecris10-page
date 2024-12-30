import Image from "next/image";
import { BlogPost } from "~/services/firestore/blogs";

export const Post = async ({ post }: { post: BlogPost }) => {
    // Concatenate the image HTML string with the post body content

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
};
