import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arzy's Portfolio",
  description: "portfolio",
  // TODO: add your base here; this should be your repo name!
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Research", link: "/research" },
      { text: "Projects", link: "/assignments"},
      { text: "About me", link: "about.md"},
    ],

    sidebar: [
      {
        text: "Research",
        link: "/research",
      },
      {
        text: "Projects",
        link: "/assignments",
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
