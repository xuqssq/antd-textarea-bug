"use client";
import { Input, Space } from "antd";
import { useState } from "react";
import ChangeLang from "@/components/ChangeLang";
import ChangeLang1 from "@/components/ChangeLang-1";
import ChangeLang2 from "@/components/ChangeLang-2";

import { useLocale } from "next-intl";

export const fetchCache = "force-no-store";
export default function Page() {
  const [value, setValue] = useState("");
  const locale = useLocale();
  return (
    <>
      <div className="min-h-screen bg-gray-500 flex flex-col justify-center items-center text-white">
        当前locale：{locale}
        <Space className="w-fit flex justify-center" direction="vertical">
          <Space>
            <div className="min-w-[300px]">
              基于 next/link 封装后的 Link(异常)：
            </div>
            <ChangeLang />
          </Space>
          <Space>
            <div className="min-w-[300px]">next.js自带的 Link 标签(异常)：</div>
            <ChangeLang1 />
          </Space>
          <Space>
            <div className="min-w-[300px]">a 标签(正常)：</div>
            <ChangeLang2 />
          </Space>
        </Space>
        <div className="w-[50%] flex justify-center items-center py-5 mx-auto ">
          <Input.TextArea
            placeholder={locale}
            autoSize={{ minRows: 5 }}
            showCount
            maxLength={3000}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ height: 118, resize: "none" }}
          />
        </div>
      </div>
    </>
  );
}
