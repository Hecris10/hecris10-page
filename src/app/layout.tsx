import { getMessages } from "next-intl/server";
import { Inter as FontSans } from "next/font/google";
import { HeaderBar } from "~/components/layout/header-bar";

import { Metadata } from "next";
import { getUserLocale } from "~/actions/locale";
import { FooterBar } from "~/components/layout/footer-bar";
import { Providers } from "~/components/providers";
import { cn } from "~/lib/utils";
import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Helaman Ewerton | Home",
    description: "Home Page",
    icons: {
        icon: "/public/assets/logo/Gemini_Generated_Image_tq8hpwtq8hpwtq8h_processed.jpeg", // /public path
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const messages = await getMessages();
    const locale = await getUserLocale();

    return (
        <html suppressHydrationWarning lang={locale}>
            <body
                className={cn(
                    "font-sans antialiased",
                    "flex flex-col justify-between",
                    fontSans.variable
                )}>
                <Providers messages={messages}>
                    <HeaderBar />
                    <main className="flex flex-col mt-[70px] items-center gap-3 p-6 w-full max-w-[1400px] mx-auto">
                        {children}
                    </main>
                    <div>
                        <FooterBar />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
