"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import { useState } from "react";
import { Locale } from "~/config/localization";
import { technologies } from "~/config/technologies";
import { cn, getIcon } from "~/lib/utils";

export const CollapseTechnologies = ({ locale }: { locale: Locale }) => {
    const [index, setIndex] = useState(0);
    const content = useTranslations("HomePage");
    const technologyHeader = content("technHeader");
    const selectedIndex = (i: number) => {
        if (index !== i) {
            setIndex(i);
        }
    };

    return (
        <div className="hidden md:block">
            <h2 className="text-2xl mb-2 text-left font-bold">{technologyHeader}</h2>
            <div className="w-full gap-2  duration-500 m-0 ease-in-out transition-all  flex">
                {technologies?.map((tech, i) => (
                    <button
                        key={tech.name}
                        type="button"
                        onClick={() => selectedIndex(i)}
                        className={cn(
                            i === index ? "w-full" : "w-1/4",
                            "duration-500 relative  h-[350px] ease-in-out transition-all hidden md:flex overflow-hidden rounded-xl shadow-lg"
                        )}>
                        <div
                            className={cn(
                                "w-full flex gap-3 z-20 absolute bottom-10",
                                "flex duration-700 ease-out transition-all"
                            )}>
                            <div className="bg-[rgba(112, 110, 111, 0.3)] bg-transparentgray z-10 blur-md absolute bottom w-full h-full"></div>
                            <div
                                className={cn(
                                    "z-20 duration-300 ease-in-out transition-all",
                                    i === index ? "w-full px-2" : "mx-auto"
                                )}>
                                <div
                                    className={cn(
                                        "bottom-4 w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] flex justify-center align-middle rounded-full bg-white dark:bg-black p-1 shadow-lg"
                                    )}>
                                    {getIcon(
                                        tech.icon,
                                        cn(
                                            "h-[40px] lg:h-[60px] w-[40px] lg:w-[60px] m-auto text-black dark:text-white"
                                        )
                                    )}
                                </div>
                            </div>
                            <div
                                className={cn(
                                    "transition-opacity z-20 duration-500 ease-in-out text-left text-white",
                                    "delay-500", // This adds a 500ms delay to the start of the transition
                                    i === index ? "opacity-100 visible" : "opacity-0 invisible",
                                    "absolute left-[110px] " // Adjust padding as needed, and ensure positioning allows for content to expand
                                )}>
                                <h3 className="text-xl md:text-2xl  text-shadow font-semibold">
                                    {tech.name}
                                </h3>{" "}
                                {/* Adjust text size as needed */}
                                <p className="text-md   text-shadow max-w-[390px]">
                                    {tech.description[locale as keyof typeof tech.description]}
                                </p>{" "}
                                {/* Adjust text size as needed */}
                            </div>
                        </div>
                        <Image
                            priority
                            className="h-full w-full object-cover z-10"
                            width={tech.img.width}
                            height={tech.img.height}
                            src={tech.img.src}
                            alt={tech.name}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
