import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },
  theme,
  // theme: hopeTheme({

  //   sidebar: {
  //     "/demo/": "structure",

  //     // "/bar/": "structure",

  //   }
  // }),
  // Enable it with pwa
  // shouldPrefetch: false,
});


