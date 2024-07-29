"use client";
import { useLocale } from "next-intl";
import {
  localeItems,
  useRouter,
  usePathname,
  defaultLocale,
} from "@/i18n/navigation";
import { IoEarth } from "react-icons/io5";
import { Dropdown } from "antd";
import Link from "next/link";
import { getJumpUrl } from "@/utils/utils";
import Cookies from "js-cookie";

export default function ChangeLang() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="cursor-pointer select-none text-sm min-w-[90px]">
      <Dropdown
        menu={null}
        placement="bottom"
        dropdownRender={() => (
          <div className=" flex flex-col py-2 rounded-lg items-center select-none text-left backdrop-blur-sm gap-1 dark:bg-gray-800/80 bg-white/80 text-gray-900 dark:text-white border dark:border-gray-700">
            {localeItems.map((item) => {
              return (
                <Link
                  href={`${getJumpUrl({ locale: item.code })}${pathname}`}
                  className="flex items-center cursor-pointer w-full justify-center hover:text-inherit text-inherit"
                  key={item.code}
                >
                  <span
                    className={`px-2 py-1 rounded-lg hover:text-white hover:bg-primary-600 ${
                      locale === item.code ? "text-white bg-primary-600" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      >
        <div className="flex items-center text-primary-600">
          <IoEarth className=" text-[30px] mr-1" />
          <span>{localeItems.find((item) => item.code === locale).name}</span>
        </div>
      </Dropdown>
    </div>
  );
}
