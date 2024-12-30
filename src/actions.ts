"use server";

import { cookies } from "next/headers";

export const changeLocale = async (locale: string) => {
    const cookiesStore = cookies();
    cookiesStore.set("locale", locale);
};
