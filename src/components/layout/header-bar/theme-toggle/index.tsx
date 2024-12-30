"use client";
import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <button
            onClick={handleThemeChange}
            className={cn(
                "flex justify-center focus:outline outline-offset-1 transition-all duration-200 hover:scale-105 zinc-shadows active:scale-105  focus:outline-teal-600 items-center gap-1 rounded-full border border-lightgray dark:border-zinc-700 dark:bg-zinc-800 theme-switch  flex-col"
            )}>
            <div className="theme-switch flex flex-col justify-center  py-2 px-6 items-center w-6 ">
                {/* light default icon */}
                <svg
                    className="default-icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 1V3.25M16.364 3.636L14.773 5.227M19 10H16.75M16.364 16.364L14.773 14.773M10 16.75V19M5.227 14.773L3.636 16.364M3.25 10H1M5.227 5.227L3.636 3.636M13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75C9.00544 13.75 8.05161 13.3549 7.34835 12.6517C6.64509 11.9484 6.25 10.9946 6.25 10C6.25 9.00544 6.64509 8.05161 7.34835 7.34835C8.05161 6.64509 9.00544 6.25 10 6.25C10.9946 6.25 11.9484 6.64509 12.6517 7.34835C13.3549 8.05161 13.75 9.00544 13.75 10Z"
                        stroke="#14B8A6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {/*light hover icon */}
                <svg
                    className="hover-icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 1V3.25V1ZM16.364 3.636L14.773 5.227L16.364 3.636ZM19 10H16.75H19ZM16.364 16.364L14.773 14.773L16.364 16.364ZM10 16.75V19V16.75ZM5.227 14.773L3.636 16.364L5.227 14.773ZM3.25 10H1H3.25ZM5.227 5.227L3.636 3.636L5.227 5.227ZM13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75C9.00544 13.75 8.05161 13.3549 7.34835 12.6517C6.64509 11.9484 6.25 10.9946 6.25 10C6.25 9.00544 6.64509 8.05161 7.34835 7.34835C8.05161 6.64509 9.00544 6.25 10 6.25C10.9946 6.25 11.9484 6.64509 12.6517 7.34835C13.3549 8.05161 13.75 9.00544 13.75 10Z"
                        fill="#F1FDFB"
                    />
                    <path
                        d="M10 1V3.25M16.364 3.636L14.773 5.227M19 10H16.75M16.364 16.364L14.773 14.773M10 16.75V19M5.227 14.773L3.636 16.364M3.25 10H1M5.227 5.227L3.636 3.636M13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75C9.00544 13.75 8.05161 13.3549 7.34835 12.6517C6.64509 11.9484 6.25 10.9946 6.25 10C6.25 9.00544 6.64509 8.05161 7.34835 7.34835C8.05161 6.64509 9.00544 6.25 10 6.25C10.9946 6.25 11.9484 6.64509 12.6517 7.34835C13.3549 8.05161 13.75 9.00544 13.75 10Z"
                        stroke="#0D9488"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {/* dark default icon */}
                <svg
                    className="default-icon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.376 14.378C19.1872 14.8735 17.9119 15.1277 16.624 15.126C11.239 15.126 6.874 10.761 6.874 5.37602C6.874 4.04602 7.14 2.77902 7.622 1.62402C5.84547 2.36514 4.32797 3.61538 3.26063 5.21728C2.19329 6.81918 1.62384 8.70111 1.624 10.626C1.624 16.011 5.989 20.376 11.374 20.376C13.2989 20.3762 15.1808 19.8067 16.7827 18.7394C18.3846 17.6721 19.6349 16.1546 20.376 14.378Z"
                        fill="#3F3F46"
                        stroke="#71717A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {/* dark hover icon */}
                <svg
                    className="hover-icon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.376 14.378C19.1872 14.8735 17.9119 15.1277 16.624 15.126C11.239 15.126 6.87399 10.761 6.87399 5.37602C6.87399 4.04602 7.13999 2.77902 7.62199 1.62402C5.84546 2.36514 4.32796 3.61538 3.26062 5.21728C2.19328 6.81918 1.62383 8.70111 1.62399 10.626C1.62399 16.011 5.98899 20.376 11.374 20.376C13.2989 20.3762 15.1808 19.8067 16.7827 18.7394C18.3846 17.6721 19.6349 16.1546 20.376 14.378Z"
                        fill="#3F3F46"
                        stroke="#A1A1AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </button>
    );
}
