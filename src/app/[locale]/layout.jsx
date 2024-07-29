import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProvider from "@/components/ConfigProvider";
import { locales } from "@/i18n/navigation";
import { NextIntlClientProvider } from "next-intl";
import { importLocale } from "@/i18n/i18n";
import { notFound } from "next/navigation";
import { NextNProgress } from "@/components/NextNProgress";
import { color } from "@/utils/color";

export default async function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  const messages = await importLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning className={``}>
      <body className="dark:bg-gray-900 dark:text-white bg-white text-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ConfigProvider>
            <AntdRegistry>
              <NextNProgress color={color.primary} height={4} />
              {children}
            </AntdRegistry>
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
