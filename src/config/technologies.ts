import { StaticImageData } from "next/image";
import nextImg from "~/../public/assets/img/technologies/next.jpg";
import reactImg from "~/../public/assets/img/technologies/react.jpg";
import tailwindImg from "~/../public/assets/img/technologies/tailwind.jpg";
import typescriptImg from "~/../public/assets/img/technologies/typescript.jpg";

export const technologies = [
    {
        name: "React",
        img: reactImg,
        icon: "react",
        description: {
            en: "React is a JavaScript library for building modern user interfaces.",
            pt: "React é uma biblioteca JavaScript para construir interfaces de usuário modernas.",
        },
        className: "text-sky-600",
    },
    {
        name: "Next.js",
        img: nextImg,
        icon: "next",
        description: {
            en: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.",
            pt: "Next.js é um framework React que permite funcionalidades como renderização no lado do servidor e geração de sites estáticos.",
        },
        className: "text-sky-600",
    },
    {
        name: "Tailwind CSS",
        img: tailwindImg,
        icon: "tailwind",
        description: {
            en: "Tailwind CSS is a utility-first CSS framework for quickly building custom designs.",
            pt: "Tailwind CSS é um framework CSS de utilitários para construir rapidamente designs personalizados.",
        },
        className: "text-sky-600",
    },
    {
        name: "TypeScript",
        img: typescriptImg,
        icon: "typescript",
        description: {
            en: "TypeScript is a superset of JavaScript that adds static types to the language.",
            pt: "TypeScript é um superset do JavaScript que adiciona tipos estáticos à linguagem.",
        },
        className: "text-sky-600",
    },
];

export type Technology = {
    name: string;
    img: StaticImageData;
    icon: string;
    description: {
        en: string;
        pt: string;
    };
    className: string;
};
