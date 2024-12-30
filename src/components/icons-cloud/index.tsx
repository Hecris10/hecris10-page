import { memo } from "react";
import IconCloud from "../magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "nextdotjs",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "figma",
];

function IconClouds() {
    return (
        <div className="relative  mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

//memo
export const MemoIconClouds = memo(IconClouds);
