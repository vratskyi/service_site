import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), compress({
    CSS: true,
    HTML: false,
    Image: true,
    JavaScript: true,
    SVG: true
  })],
  // i18n settings
  i18n: {
    defaultLocale: "ua",
    locales: ["ua", {
      path: "ua",
      codes: ["ua", "ua-UK"]
    }, "ru", {
      path: "ru",
      codes: ["ru", "ru-RU"]
    }],
    routing: {
      prefixDefaultLocale: false
      // redirectToDefaultLocale: false
    },
    fallback: {
      ru: "ua"
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true
  },
});