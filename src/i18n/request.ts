import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    const headersList = await headers();
    const cookiesStore = await cookies();

    let locale =
        cookiesStore.get("locale")?.value ||
        headersList.get("accept-language")?.split(",")[1].split(";")[0];

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
