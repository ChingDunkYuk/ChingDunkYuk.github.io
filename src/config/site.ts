import { DEFAULT_LOCALE, LOCALES } from '../types';

/**
 * Site-wide identity & links — the single place to update the
 * domain, GitHub, email, or logo files without grepping the
 * whole project.
 *
 * `siteUrl` must stay in sync with `site` in astro.config.ts
 * (the config imports it from here, so editing this file is
 * enough — the fallback below only matters if `Astro.site`
 * is ever unset).
 */
export const site = {
  /** display name — og:site_name, footer © line */
  name: 'Tung Yuk',
  /** canonical origin */
  siteUrl: 'https://chingdunkyuk.github.io',
  /** GitHub profile — footer + about contact */
  github: 'https://github.com/ChingDunkYuk',
  /** GitHub username — the `github.com/<handle>` display text */
  githubHandle: 'ChingDunkYuk',
  /** not public yet — the about section shows the "reserved" note */
  email: undefined as string | undefined,
  /** logo files under public/ (cream default + amber hover twin) */
  logo: {
    default: '/logo-mark.png',
    hover: '/logo-mark-amber.png',
  },
  defaultLocale: DEFAULT_LOCALE,
  supportedLocales: LOCALES,
};
