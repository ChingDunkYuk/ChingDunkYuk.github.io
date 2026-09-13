import type { NavItem } from '../types';

/**
 * Primary nav — one entry per section link in the header.
 * `id` must match a section id on the page (the anchor href
 * is `#id`); labels are per-locale.
 */
export const navItems: NavItem[] = [
  { id: 'now', label: { en: 'Now', 'zh-hk': '近況' } },
  { id: 'projects', label: { en: 'Projects', 'zh-hk': '項目' } },
  { id: 'photography', label: { en: 'Photography', 'zh-hk': '攝影' } },
  { id: 'writing', label: { en: 'Writing', 'zh-hk': '文章' } },
  { id: 'about', label: { en: 'About', 'zh-hk': '關於' } },
];
