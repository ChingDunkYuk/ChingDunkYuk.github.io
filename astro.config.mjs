// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chingdunkyuk.github.io',
  integrations: [
    // Each URL in sitemap-0.xml carries xhtml:link hreflang alternates
    // (en ↔ zh-HK); x-default lives in the page <head> instead.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'zh-hk': 'zh-HK' },
      },
    }),
  ],
  i18n: {
    // URL prefixes; the <html lang> values ("en" / "zh-HK") are
    // managed in src/i18n/config.ts and set per page.
    locales: ['en', 'zh-hk'],
    defaultLocale: 'en',
    routing: {
      // English stays at `/` with no prefix; zh-hk lives at `/zh-hk/`.
      prefixDefaultLocale: false,
    },
  },
});
