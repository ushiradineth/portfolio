import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind(), sitemap(), robotsTxt()],
	output: "static",
	adapter: vercelStatic(),
});
