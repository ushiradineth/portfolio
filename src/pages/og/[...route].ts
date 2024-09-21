import { OGImageRoute } from "astro-og-canvas";

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",

  pages: {
    index: {
      title: "portfolio",
    },
    projects: {
      title: "projects",
    },
    work: {
      title: "work",
    },
    blog: {
      title: "blog",
    },
  },

  getImageOptions: (_, page) => ({
    title: page.title,
    description: page.description,
    bgImage: {
      path: "./src/images/og-bg.png",
    },
    fonts: ["https://cdn.jsdelivr.net/fontsource/fonts/roboto-mono:vf@latest/latin-wght-normal.woff2"],
    font: {
      title: {
        color: [0, 0, 0],
        families: ["Roboto Mono"],
        size: 80,
      },
      description: {
        color: [0, 0, 0],
        families: ["Roboto Mono"],
        size: 30,
      },
    },
  }),
});
