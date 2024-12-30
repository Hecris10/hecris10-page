import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { metadataSettings } from "~/config/metadata";
import { PageProps } from "~/d";
import { getBlogsByRange } from "~/services/firestore/blogs";

export async function generateMetadata(): Promise<Metadata> {
    const locale = (await getLocale()) as keyof typeof metadataSettings.home.title;
    const title = metadataSettings.blog.title[locale];
    const description = metadataSettings.blog.description[locale];

    return { title: `Helaman Ewerton | ${title}`, description };
}

const maxPostsPerPage = 6;

export default async function Blog({ searchParams, params }: PageProps) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const realStartPageIndex = (page - 1) * 6;
    const realEndPageIndex = realStartPageIndex + 6;
    const data = await getBlogsByRange("en", realStartPageIndex, realEndPageIndex);

    return (
        <div className="w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {data?.map((post) => (
                <div key={post.id} className="w-full p-4 rounded-lg dark:border border-zinc-700">
                    <p className="text-teal-600 font-bold italic text-xs">{post.date}</p>
                    {/* <Image src={post.} /> */}
                    <h3>{post.title}</h3>
                    <div className="p-2 flex justify-center align-middle rounded-lg relative my-4">
                        <div className="p-2 flex absolute w-full h-full justify-center align-middle bg-slate-300 dark:bg-slate-500 rounded-lg opacity-15" />
                        <Image
                            width={200}
                            height={200}
                            className="rounded-lg mx-auto h-[100px] p-2 object-contain"
                            alt={`Image of ${post.title}`}
                            src={post.image}
                        />
                    </div>
                    <p className="text-md text-zinc-600 dark:text-zinc-400 dark:">{`${post.short.slice(
                        0,
                        300
                    )}...`}</p>
                    <Link className="text-teal-500 font-bold" href={`/blog/post/${post.id}`}>
                        Read more
                    </Link>
                </div>
            ))}
        </div>
    );
}
