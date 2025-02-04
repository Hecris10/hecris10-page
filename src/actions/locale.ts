"use server";

import { revalidatePath } from "next/cache";

import { cookies, headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { defaultLocale, Locale, localizations } from "~/config/localization";

export const getLocale = async () => {
    const headersList = await headers();
    const cookiesStore = await cookies();
    let locale =
        cookiesStore.get("locale")?.value ||
        headersList.get("accept-language")?.split(",")[1].split(";")[0];
    if (!locale || localizations.findIndex((l) => l.locale === locale) === -1) {
        locale = defaultLocale;
    }
    return locale as Locale;
};

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "locale";

export async function getUserLocale() {
    const cookiesStore = await cookies();
    return cookiesStore.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale, path?: string) {
    const cookiesStore = await cookies();
    cookiesStore.set(COOKIE_NAME, locale);
    cookiesStore.set("locale", locale);
    if (path) {
        revalidatePath(path, "layout");
        redirect(path, RedirectType.push);
    }
}
