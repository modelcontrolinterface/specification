import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default defineConfig(
  withMermaid({
    srcDir: "",
    cleanUrls: true,

    base: "/specification",
    title: "Model Control Interface",
    description: "The model control interface specification",

    locales: {
      root: {
        lang: "en",
        label: "English",
      },
    },

    themeConfig: {
      search: {
        provider: "local",
      },

      nav: [
        // { text: "Home", link: "/" },
        // { text: "Blog", link: "/blog" },
        // { text: "Documentation", link: "/docs" },
        // { text: "Specification", link: "/" },
        // { text: "Community", link: "/community" },
      ],

      sidebar: [
        { text: "Specification", link: "/" },
        {
          text: "Architecture",
          items: [
            { text: "Overview", link: "/architecture" },
            { text: "Life Cycle", link: "/architecture/lifecycle" },
          ],
        },
      ],

      outline: {
        level: [2, 3],
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/modelcontrolinterface" },
      ],

      editLink: {
        pattern:
          "https://github.com/modelcontrolinterface/specifications/edit/main/docs/:path",
        text: "Edit this page",
      },

      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2025",
      },
    },

    rewrites: {
      "latest/:slug*": ":slug*",
      ":lang/latest/:slug*": ":lang/:slug*",
    },

    lastUpdated: true,
  }),
);
