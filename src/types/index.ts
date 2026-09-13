import type { ImageMetadata } from 'astro';

/**
 * Shared content types — the single source of truth for every
 * data file under src/data/. Locale lives here too, so data files
 * never import from i18n internals.
 */

/** Supported locales — matches astro.config.ts `i18n.locales`. */
export const LOCALES = ['en', 'zh-hk'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Any content string that differs per locale. */
export type LocalizedString = Record<Locale, string>;

export interface Project {
  /** project name — stays English across locales */
  title: string;
  description: LocalizedString;
  /** status line under the description (e.g. "running · android app") */
  status: LocalizedString;
  /** repo link — absent means "not published yet", the card stays inert */
  github?: string;
  demo?: string;
  tags?: string[];
}

export type PhotoSlot = 'ph-a' | 'ph-b' | 'ph-c' | 'ph-d';

export interface Photo {
  /** image imported from src/assets/photos/ */
  src: ImageMetadata;
  /**
   * Grid slot — controls the frame width on desktop; photos keep
   * their own aspect ratio, only the column span differs:
   *   ph-a: 2/6 narrow · ph-b: 4/6 wide · ph-c / ph-d: 3/6 medium
   */
  slot: PhotoSlot;
  /** screen-reader description of the shot, per locale */
  alt?: LocalizedString;
  /** caption under the frame, per locale */
  caption: LocalizedString;
  /** only featured photos render on the homepage contact sheet */
  featured: boolean;
  /** reserved for the future photography page — not rendered yet */
  title?: string;
  location?: string;
  year?: number;
}

export interface NowItem {
  /** left column, e.g. "what2eat" / "呢個網站" — can differ per locale */
  name: LocalizedString;
  /** right column — what's happening with it */
  description: LocalizedString;
}

export interface NowData {
  /** date stamp under the readout, e.g. '2026-09' */
  updated: string;
  items: NowItem[];
}

export interface WritingItem {
  /** e.g. 'drafting' / '撰寫中', or a real date once posts go live */
  time: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  /** reserved — link to the post once writing goes live */
  href?: string;
}

export interface NavItem {
  /** section id — doubles as the anchor href (#now, #projects, …) */
  id: string;
  label: LocalizedString;
}
