"use client";

import { motion } from "framer-motion";

import { cn } from "~/lib/utils";

interface LetterPullupProps {
    className?: string;
    words: string;
    delay?: number;
}

export default function LetterPullup({ className, words, delay }: LetterPullupProps) {
    const wordArray = words.split(" ");

    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i: any) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * (delay ? delay : 0.05), // By default, delay each word's animation by 0.05 seconds
            },
        }),
    };

    return (
        <div className="flex flex-wrap gap-1 justify-start">
            {wordArray.map((word, i) => (
                <motion.h1
                    key={i}
                    variants={pullupVariant}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className={cn(
                        "text-center text-4xl font-bold text-black drop-shadow-sm dark:text-white",
                        className
                    )}
                    style={{ display: "inline-block", marginRight: "0.25rem" }} // Add some space between words
                >
                    {word}
                </motion.h1>
            ))}
        </div>
    );
}
