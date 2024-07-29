import { defaultLocale } from "@/i18n/navigation";
export const getJumpUrl = ({ locale }) => {
  return locale === defaultLocale ? `` : `/${locale}`;
};


export function truncateString(row = 3) {
  return {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    WebkitLineClamp: row,
  };
}
