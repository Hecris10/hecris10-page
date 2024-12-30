import { cookies, headers } from "next/headers";
import { defaultLocale, localizations } from "~/config/localization";

export const useGetLocale = () => {
    const headersList = headers();
    const cookiesStore = cookies();
    let locale =
        cookiesStore.get("locale")?.value ||
        headersList.get("accept-language")?.split(",")[1].split(";")[0];
    if (!locale || localizations.findIndex((l) => l.locale === locale) === -1) {
        locale = defaultLocale;
    }
    return locale;
};

export const getLocale = () => {
    const headersList = headers();
    const cookiesStore = cookies();
    let locale =
        cookiesStore.get("locale")?.value ||
        headersList.get("accept-language")?.split(",")[1].split(";")[0];
    if (!locale || localizations.findIndex((l) => l.locale === locale) === -1) {
        locale = defaultLocale;
    }
    return locale;
};
