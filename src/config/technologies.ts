import nextImg from "~/../public/assets/img/technologies/next.jpg";
import reactImg from "~/../public/assets/img/technologies/react.jpg";
import tailwindImg from "~/../public/assets/img/technologies/tailwind.jpg";
import typescriptImg from "~/../public/assets/img/technologies/typescript.jpg";

export const technologies = [
    {
        name: "React",
        img: reactImg,
        icon: "react",
        description: "React is a JavaScript library for building modern user interfaces.",
        className: "text-sky-600",
    },
    {
        name: "Next.js",
        img: nextImg,
        icon: "next",
        description:
            "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.",
        className: "text-sky-600",
    },
    {
        name: "Tailwind CSS",
        img: tailwindImg,
        icon: "tailwind",
        description:
            "Tailwind CSS is a utility-first CSS framework for quickly building custom designs.",
        className: "text-sky-600",
    },
    {
        name: "TypeScript",
        img: typescriptImg,
        icon: "typescript",
        description:
            "TypeScript is a superset of JavaScript that adds static types to the language.",
        className: "text-sky-600",
    },
];

export type Technology = (typeof technologies)[number];
