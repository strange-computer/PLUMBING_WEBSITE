import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://oceanviewplumbing.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});
