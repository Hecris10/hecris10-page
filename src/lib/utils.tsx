import { type ClassValue, clsx } from "clsx";
import { Twitter } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Icons } from "~/components/icons";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const getIcon = (name?: string, classes?: string) => {
    switch (name) {
        case "logo":
            return <Icons.logo className={classes || ""} />;
        case "next":
            return <Icons.logo className={classes || ""} />;
        case "sun":
            return <Icons.sun className={classes || ""} />;
        case "moon":
            return <Icons.moon className={classes || ""} />;
        case "twitter":
            return <Twitter className={classes || ""} />;
        case "github":
            return <Icons.gitHub className={classes || ""} />;
        case "linkedin":
            return <Icons.linkedin className={classes || ""} />;
        case "html":
            return <Icons.html className={classes || ""} />;
        case "HTML":
            return <Icons.html className={classes || ""} />;
        case "css":
            return <Icons.css className={classes || ""} />;
        case "CSS":
            return <Icons.css className={classes || ""} />;
        case "javascript":
            return <Icons.javascript className={classes || ""} />;
        case "Javascript":
            return <Icons.javascript className={classes || ""} />;
        case "react":
            return <Icons.react className={classes || ""} />;
        case "typescript":
            return <Icons.typescript className={classes || ""} />;
        case "Typescript":
            return <Icons.typescript className={classes || ""} />;
        case "tailwind":
            return <Icons.tailwind className={classes || ""} />;
        case "Tailwind":
            return <Icons.tailwind className={classes || ""} />;
        case "ChevronDownArrow":
            return <Icons.chevronDownArrow className={classes || ""} />;
        default:
            return <Icons.logo className={classes || ""} />; // Return null if the icon name is not found
    }
};
