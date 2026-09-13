import type { Photo } from '../types';

/**
 * HOW TO ADD / REPLACE A PHOTO
 * 1. drop the original file into src/assets/photos/original/
 *    (gitignored — originals stay on your machine only)
 * 2. run `python scripts/watermark.py` — bakes a small
 *    "© by klaus" corner mark into a copy placed in
 *    src/assets/photos/
 * 3. import the watermarked copy and register it below
 *
 * Astro optimizes every registered photo automatically (webp,
 * responsive sizes) — no manual resizing needed.
 *
 * Only entries with `featured: true` render on the homepage
 * contact sheet; everything else is reserved for the future
 * photography page (title / location / year feed that page).
 *
 * import mongkok from '../assets/photos/mongkok-night.jpg';
 *
 * {
 *   src: mongkok,
 *   slot: 'ph-a',
 *   alt: { en: 'Neon signs in Mong Kok at night', 'zh-hk': '旺角霓虹夜色' },
 *   caption: { en: 'Mong Kok, night', 'zh-hk': '旺角，夜' },
 *   featured: true,
 * },
 */
import alleyRoots from '../assets/photos/alley-roots.jpg';
import pavementRoots from '../assets/photos/pavement-roots.jpg';
import workshopLight from '../assets/photos/workshop-light.jpg';

export const photography: Photo[] = [
  {
    src: alleyRoots,
    slot: 'ph-b',
    alt: {
      en: 'Old alley with exposed tree roots and a hand-written shop sign',
      'zh-hk': '舊城小巷，樹根露出地面，旁邊一塊手寫招牌',
    },
    caption: { en: 'old town alley', 'zh-hk': '舊城老巷' },
    featured: true,
  },
  {
    src: pavementRoots,
    slot: 'ph-a',
    alt: {
      en: 'Tree roots spreading across stone pavement in hard afternoon light',
      'zh-hk': '午後硬光下，樹根橫過石板路蔓延',
    },
    caption: { en: 'roots on stone', 'zh-hk': '石板上的根' },
    featured: true,
  },
  {
    src: workshopLight,
    slot: 'ph-c',
    alt: {
      en: 'Workbench and wooden stool cut by shafts of window light',
      'zh-hk': '工作台同木凳，俾一道道窗光切開',
    },
    caption: { en: 'workshop light', 'zh-hk': '工房窗光' },
    featured: true,
  },
];
