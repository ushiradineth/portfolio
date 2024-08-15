import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercelStatic from "@astrojs/vercel/static";
//import ogCanvas from "astro-og-canvas";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap(), robotsTxt()],
	output: "static",
	site: "https://ushira.com",
	adapter: vercelStatic(),
});
