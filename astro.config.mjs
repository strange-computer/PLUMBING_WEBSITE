import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lezcoplumbing.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});
