import type { WritingItem } from '../types';

/**
 * Writing entries — one per row in the writing section.
 * `time` is the publish stamp; `href` is the canonical (en) path to
 * the post page — localizePath maps it per locale, and a row with
 * an href renders as a link. Draft rows (no href) stay inert.
 */
export const writing: WritingItem[] = [
  {
    time: { en: '2026-09', 'zh-hk': '2026-09' },
    title: {
      en: 'Building My Own Little Corner of the Internet',
      'zh-hk': '砌咗個自己嘅互聯網角落',
    },
    excerpt: {
      en: 'I suddenly ended up building two or three small projects, then just as suddenly thought, “Why not make a personal website?” So this happened.',
      'zh-hk': '突然間整咗兩三個小項目，又突然間想整個個人網站，所以就有咗呢度。',
    },
    href: '/writing/',
  },
];
