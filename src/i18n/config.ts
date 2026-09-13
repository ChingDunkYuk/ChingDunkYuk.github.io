import { en } from './en';
import { zhHK } from './zh-hk';
import { DEFAULT_LOCALE, type Locale } from '../types';

// Re-exported for convenience — existing imports keep working.
export type { Locale };

/**
 * Locale registry. The URL prefix ("zh-hk") and the html lang
 * attribute ("zh-HK") are intentionally separate concerns.
 *
 * Routes (matches astro.config.ts `i18n`):
 *   en    → /            (default, no prefix)
 *   zh-hk → /zh-hk/
 *
 * Future pages follow the same shape, e.g. with localizePath():
 *   localizePath('/writing/', 'en')    → '/writing/'
 *   localizePath('/writing/', 'zh-hk') → '/zh-hk/writing/'
 */
export const defaultLocale = DEFAULT_LOCALE;

/** Locale → BCP-47 value for the <html lang> attribute. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  'zh-hk': 'zh-HK',
};

/** Locale → home path. */
export const localeBase: Record<Locale, string> = {
  en: '/',
  'zh-hk': '/zh-hk/',
};

const dictionaries: Record<Locale, typeof en> = {
  en,
  'zh-hk': zhHK,
};

export function getDict(locale: Locale) {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh-hk' : 'en';
}

/**
 * Localize a canonical (English) path for a locale.
 * `path` is always written without a locale prefix.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? localeBase[locale] : `/zh-hk${path}`;
}
