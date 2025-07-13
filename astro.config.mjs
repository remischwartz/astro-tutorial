// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://remischwartz.github.io/astro-tutorial/",
  base: "astro-tutorial",
  integrations: [preact()],
});
