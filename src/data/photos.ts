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
 * 1. drop the file into src/assets/photos/ (jpg/png/webp)
 * 2. add an import line at the top of this file
 * 3. add an entry to the array below
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
export const photos: Photo[] = [];
