import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localePrefix = "as-needed";

export const defaultLocale = "en";

export const localeItems = [
  { name: "English", code: "en", iso: "en-US" },
  { name: "中文", code: "zh", iso: "zh-CN" },
  { name: "日本語", code: "ja", iso: "ja-JP" },
  { name: "한국인", code: "ko", iso: "ko-KR" },
];

export const locales = localeItems.map((item) => item.code);

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
