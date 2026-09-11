// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
site: 'https://chingdunkyuk.github.io',
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
