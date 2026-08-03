import { MenuOption } from "~/components/layout/header-bar/header-bar.types";

export interface InternalLink {
    en: MenuOption[];
    pt: MenuOption[];
}
export const internalLinks: InternalLink = {
    en: [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "About",
            link: "/about",
        },
        {
            label: "Projects",
            link: "/projects",
        },
        {
            label: "Journey",
            link: "/journey",
        },
        {
            label: "Tech Stack",
            link: "/tech-stack",
        },
        {
            label: "Blog",
            link: "/blog",
        },
    ],
    pt: [
        {
            label: "Início",
            link: "/",
        },
        {
            label: "Sobre",
            link: "/about",
        },
        {
            label: "Projetos",
            link: "/projects",
        },
        {
            label: "Jornada",
            link: "/journey",
        },
        {
            label: "Stack Técnica",
            link: "/tech-stack",
        },
        {
            label: "Blog",
            link: "/blog",
        },
    ],
};

export const getInteralLinkOptions = (locale: string): MenuOption[] => {
    return internalLinks[locale as keyof InternalLink];
};
