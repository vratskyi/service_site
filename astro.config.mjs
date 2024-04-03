import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress({
    CSS: true,
    HTML: false,
    Image: true,
    JavaScript: true,
    SVG: true
  }), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'dracula' },
    // remarkPlugins: [remarkToc],
    // rehypePlugins: [rehypeMinifyHtml],
    // remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false,
  }),],
  // i18n settings
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "ua"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    },
    fallback: {
      ua: "ru"
    }
  },
  redirects: {
    '/': '/ru'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  }
});