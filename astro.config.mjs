import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://vratsky.vercel.app',
  integrations: [tailwind(), compress({
    CSS: false,
    HTML: false,
    Image: true,
    JavaScript: true,
    SVG: false
  }), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula"
    },
    // remarkPlugins: [remarkToc],
    // rehypePlugins: [rehypeMinifyHtml],
    // remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false
  }), sitemap({
    i18n: {
      defaultLocale: 'ru',
      locales: {
        ru: 'ru-RU',
        ua: 'uk-UA',
        en: 'en-US',
      },
    },
  })],
  // i18n settings
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "ua", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    },
    fallback: {
      ua: "ru",
      en: "ru"
    }
  },
  redirects: {
    "/": "/ru"
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  experimental: {
    clientPrerender: true,
    directRenderScript: false
  },
  output: "hybrid",
  adapter: vercel({
    functionPerRoute: true,
    imageService: true,
    isr: {
      expiration: 60 * 60 * 24
    },
    webAnalytics: {
      enabled: true
    }
  })
});