import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), prefetch(), solidJs()],
  site: 'https://manmen-mi.github.io',
  base: '/astro-page',
});