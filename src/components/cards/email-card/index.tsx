"use client";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { toast } from "sonner";
import LoadingButton from "~/components/loading-button";
import Confetti, { ConfettiRef } from "~/components/magicui/confetti";

export const EmailCard = () => {
    const content = useTranslations("HomePage");
    const inputRef = useRef<HTMLInputElement>(null);
    const confettiRef = useRef<ConfettiRef>(null);

    const mainHeading = content("emailSubscribeHeading");
    const subHeading = content("emailSubscribeSubHeading");
    const emailSubscribeButtonText = content("emailSubscribeButtonText");
    const emailSubscribeButtonLoadingText = content("emailSubscribeButtonLoadingText");
    const emailSubscribeConfirmationToast = content("emailSubscribeConfirmationToast");

    const onSubmit = async (e: FormData) => {
        const email = e.get("email")?.valueOf() as string;
        try {
            await fetch("/api/subscribe-email", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast(emailSubscribeConfirmationToast);
            confettiRef.current?.fire({});
            if (inputRef.current) inputRef.current.value = "";
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Confetti
                manualstart
                ref={confettiRef}
                className="left-0 absolute lg:fixed lg:top-20 lg:left-[40vw] z-0 size-full lg:w-auto lg:h-auto flex"
            />
            <form
                action={onSubmit}
                className="rounded-lg w-full shadow-md p-6 border relative border-zinc-100 dark:border-zinc-800">
                <div className="w-full flex gap-3">
                    <Mail className="text-zinc-400 dark:text-zinc-500 my-auto" />{" "}
                    <h3 className="my-auto">{mainHeading}</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 mb-2">{subHeading}</p>
                <div className="w-full gap-4 flex flex-col md:flex-row mt-4">
                    <input
                        ref={inputRef}
                        type="email"
                        required
                        name="email"
                        placeholder="Email address"
                    />
                    <LoadingButton
                        loadingText={emailSubscribeButtonLoadingText}
                        type="submit"
                        className="btn-default">
                        {emailSubscribeButtonText}
                    </LoadingButton>
                </div>
            </form>
        </>
    );
};
