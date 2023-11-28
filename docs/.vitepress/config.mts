import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitePress/",
  title: "VitePress中文", // 页面的标题
  titleTemplate: "Vite 和 Vue 强力驱动的静态网站生成器", // 标题的后缀
  description: "VitePress | Vite 和 Vue 强力驱动的静态网站生成器", // 页面的描述 meta中
  // 在页面 HTML 的<head>标记中呈现的其他元素
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/vitepress-logo-mini.svg" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", href: "/vitepress-logo-mini.png" },
    ],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "VitePress" }],
    [
      "meta",
      { name: "og:image", content: "https://vitepress.dev/vitepress-og.jpg" },
    ],
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "AZBRSFGG",
        "data-spa": "auto",
        defer: "",
      },
    ],
  ],
  // 站点的 lang 属性
  lang: "en-US",
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // 网站标题和Logo
    siteTitle: "VitePress",
    logo: "/vitepress-logo-mini.svg",
    // 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            //这里是个大坑，zh是不生效的，改为root即可
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    // 导航链接
    nav: [
      { text: "指南", link: "/guide" },
      { text: "参考", link: "/reference" },
      {
        text: "1.0.0-rc.31",
        items: [
          {
            text: "变更日志",
            link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
          },
          {
            text: "贡献",
            link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
          },
        ],
      },
    ],
    // 社交链接
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/vuejs/vitepress",
        ariaLabel: "cool link",
      },
    ],
    darkModeSwitchLabel: "切换主题",
    // 侧边栏
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    // 底部
    footer: {
      message: "根据麻省理工学院许可证发布.",
      copyright: "版权所有©2019-至今 尤雨溪",
    },
  },
});
