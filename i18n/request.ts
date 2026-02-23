/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = {
    main: (await import(`../messages/${locale}/main.json`)).default,
    about: (await import(`../messages/${locale}/about.json`)).default,
    contact: (await import(`../messages/${locale}/contact.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
