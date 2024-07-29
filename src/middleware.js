import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales,localePrefix } from "./i18n/navigation";

export default createMiddleware({
  locales,
  localePrefix ,
  defaultLocale,
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
