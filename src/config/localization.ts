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

/** Type guard: is the given value one of our supported locales? */
export function isSupportedLocale(value?: string | null): value is Locale {
    return !!value && locales.includes(value);
}

/**
 * Resolve a supported locale from a stored cookie value and/or the browser's
 * `Accept-Language` header, always falling back to `defaultLocale`.
 *
 * The header looks like `en-US,en;q=0.9,pt;q=0.8`, so we take the first
 * (most-preferred) entry, drop its quality weight and region subtag, and
 * normalize it before checking it against our supported locales.
 */
export function resolveLocale(
    cookieLocale?: string | null,
    acceptLanguage?: string | null
): Locale {
    if (isSupportedLocale(cookieLocale)) return cookieLocale;

    const fromHeader = acceptLanguage
        ?.split(",")[0] // most-preferred language
        ?.split(";")[0] // strip the `;q=` weight
        ?.split("-")[0] // strip the region subtag (en-US -> en)
        ?.trim()
        ?.toLowerCase();

    if (isSupportedLocale(fromHeader)) return fromHeader;

    return defaultLocale;
}
