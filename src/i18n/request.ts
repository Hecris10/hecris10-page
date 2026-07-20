import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { resolveLocale } from "~/config/localization";

export default getRequestConfig(async () => {
    // Read the locale from the cookie first, then the browser's
    // `Accept-Language` header, always falling back to the default locale so
    // the message import below can never resolve to `undefined`.
    const headersList = await headers();
    const cookiesStore = await cookies();

    const locale = resolveLocale(
        cookiesStore.get("locale")?.value,
        headersList.get("accept-language")
    );

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
