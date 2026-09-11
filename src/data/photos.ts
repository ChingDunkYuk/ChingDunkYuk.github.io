import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/config';

export type PhotoSlot = 'ph-a' | 'ph-b' | 'ph-c' | 'ph-d';

export interface Photo {
  /** image imported from src/assets/photos/ (see example below) */
  src: ImageMetadata;
  /**
   * Grid slot — controls the frame width on desktop; photos keep
   * their own aspect ratio, only the column span differs:
   *   ph-a: 2/6 narrow · ph-b: 4/6 wide · ph-c / ph-d: 3/6 medium
   */
  slot: PhotoSlot;
  /** screen-reader description of the shot */
  alt?: string;
  /** caption under the frame, per locale */
  caption: Record<Locale, string>;
}

/**
 * HOW TO ADD A PHOTO
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
 * import mongkok from '../assets/photos/mongkok-night.jpg';
 *
 * export const photos: Photo[] = [
 *   {
 *     src: mongkok,
 *     slot: 'ph-a',
 *     alt: 'Neon signs in Mong Kok at night',
 *     caption: { en: 'Mong Kok, night', 'zh-hk': '旺角，夜' },
 *   },
 * ];
 */
import alleyRoots from '../assets/photos/alley-roots.jpg';
import pavementRoots from '../assets/photos/pavement-roots.jpg';
import workshopLight from '../assets/photos/workshop-light.jpg';

export const photos: Photo[] = [
  {
    src: alleyRoots,
    slot: 'ph-b',
    alt: 'Old alley with exposed tree roots and a hand-written shop sign',
    caption: { en: 'old town alley', 'zh-hk': '舊城老巷' },
  },
  {
    src: pavementRoots,
    slot: 'ph-a',
    alt: 'Tree roots spreading across stone pavement in hard afternoon light',
    caption: { en: 'roots on stone', 'zh-hk': '石板上的根' },
  },
  {
    src: workshopLight,
    slot: 'ph-c',
    alt: 'Workbench and wooden stool cut by shafts of window light',
    caption: { en: 'workshop light', 'zh-hk': '工房窗光' },
  },
];
