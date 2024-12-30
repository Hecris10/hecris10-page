import { Analytics } from "@vercel/analytics/react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const Providers = async ({
    children,
    messages,
}: {
    children: ReactNode;
    messages: AbstractIntlMessages;
}) => {
    return (
        <>
            <Analytics />
            <NextIntlClientProvider messages={messages}>
                <ThemeProvider enableSystem defaultTheme="system" attribute="class">
                    <Toaster />
                    {children}
                </ThemeProvider>
            </NextIntlClientProvider>
        </>
    );
};
