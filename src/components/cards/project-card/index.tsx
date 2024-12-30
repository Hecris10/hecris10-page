import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Project } from "~/services/firestore/projects";
export const ProjectCard = async ({ project }: { project: Project }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="w-full">
                <div className=" border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-md rounded-full justify-center align-middle w-16 h-16 p-2">
                    <Image
                        alt={project.name + `image`}
                        width={100}
                        height={100}
                        src={project.image}
                        className={cn("h-full w-full mc-auto rounded-full")}
                    />
                </div>
                <h2 className="font-bold mt-2">{project.name}</h2>
                <p className="my-2 text-justify text-zinc-700 dark:text-zinc-400">
                    {`${project.description.slice(0, 450)}${
                        project.description.length > 450 ? "..." : ""
                    }`}
                </p>
                <div className="w-full flex gap-2 text-zinc-700 dark:text-zinc-400">
                    {" "}
                    {/* Adjust the gap value as needed */}
                    <div>
                        <LinkIcon className="w-[20px] h-[20px] " />
                    </div>
                    <div>
                        <Link href={project.link} target="_blank" className="">
                            {project.link}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
