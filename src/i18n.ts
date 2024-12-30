import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { localizations } from "./config/localization";

const defaultLocale = "en";

export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    // read from `cookies()`, `headers()`, etc.
    const headersList = headers();
    const cookiesStore = cookies();

    let locale =
        cookiesStore.get("locale")?.value ||
        headersList.get("accept-language")?.split(",")[1].split(";")[0];

    if (!locale || localizations.findIndex((l) => l.locale === locale) === -1) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
