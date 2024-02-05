import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercelStatic from "@astrojs/vercel/static";
import preload from "astro-preload";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt(), preload(), compress()],
  output: "static",
  site: 'https://ushira.com',
  adapter: vercelStatic()
});