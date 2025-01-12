import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BlogPostShort } from "~/services/firestore/blogs";

export const BlogShortCard = ({ post, locale }: { post: BlogPostShort; locale: string }) => {
    const content = useTranslations("HomePage");
    const articleLinkName = content("articleLinkName");

    return (
        <div className="w-full my-4">
            {/* date formated by locale */}
            <p className="text-sm text-zinc-400 border-l-2 px-6 border-zinc-404 ">{post.date}</p>
            <h3 className="my-2">{post.title}</h3>
            <p className="text-justify text-zinc-600 dark:text-zinc-400 mb-2">{`${post.short?.slice(
                0,
                350
            )}...`}</p>
            <Link
                href={`/blog/post/${post.id}`}
                className="text-teal-500 dark:text-teal-400 font-bold duration-400 hover:scale-105 ease-in-out">
                {articleLinkName}
                <ChevronRight className="w-6 h-6 inline-block" />
            </Link>
        </div>
    );
};
