import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { locales } from "./navigation";

export const importLocale = async (locale) => {
  return (await import(`./messages/${locale}.json`)).default;
};


export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: await importLocale(locale),
  };
});
