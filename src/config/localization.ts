export type Locale = (typeof locales)[number];

export const localizations = [
    {
        locale: "en",
        label: "English",
    },
    {
        locale: "pt",
        label: "Português",
    },
];

export const locales = localizations?.map((l) => l.locale);
export const defaultLocale: Locale = "en";
