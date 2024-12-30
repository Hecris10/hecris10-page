"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { cn } from "~/lib/utils";
import { Spinner } from "../spinner";
import { Button } from "../ui/button";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isPending?: boolean;
    loadingText?: string;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, isPending, loadingText, ...props }, ref) => {
        const { pending } = useFormStatus();
        const isLoading = isPending || pending;
        return (
            <Button className={cn()} ref={ref} {...props}>
                {isLoading && <Spinner className="text-zinc-300 dark:text-zinc-700" />}
                {isLoading && !!loadingText && loadingText.length > 0 ? loadingText : children}
            </Button>
        );
    }
);

LoadingButton.displayName = "LoadingButton";
export default LoadingButton;
