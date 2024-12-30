"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "~/lib/utils";

interface GradualSpacingProps {
    text: string;
    duration?: number;
    delayMultiple?: number;
    framerProps?: Variants;
    className?: string;
}

export default function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
}: GradualSpacingProps) {
    return (
        <div className="flex justify-start flex-wrap">
            <AnimatePresence>
                {text.split(" ").map((word, wordIndex) => (
                    <motion.div
                        key={wordIndex}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={framerProps}
                        transition={{
                            duration,
                            delay: wordIndex * delayMultiple,
                        }}
                        className={cn("drop-shadow-sm break-words inline-block", className)}
                        style={{ display: "inline-block", marginRight: "0.25rem" }} // Add some space between words
                    >
                        {word}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
