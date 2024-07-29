"use client";
import { ConfigProvider, theme } from "antd";
import { color } from "@/utils/color";

export default function ConfigProviderCom({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color.primary,
        },
        components: {
          Segmented: {
            itemActiveBg:color.primary,
            itemSelectedBg: color.primary,
            itemHoverBg:color.primary,
            itemSelectedColor: "#fff",
            itemHoverColor:"#fff"
          },
        },

        // algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
