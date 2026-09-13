import type { NavItem } from '../types';

/**
 * Primary nav — one entry per section link in the header.
 * `id` must match a section id on the page (the anchor href
 * is `#id`); labels are per-locale and double as each link's
 * aria-label and hover/focus tooltip text.
 *
 * `icon` is the <path d="…"> data of a Google Material Symbols
 * "outlined" 24px icon (Apache 2.0, Google LLC):
 * https://github.com/google/material-design-icons
 * To swap one, copy the path `d` from
 * symbols/web/<name>/materialsymbolsoutlined/<name>_24px.svg
 * — no icon library needed, the SVG shell lives in Header.astro.
 *
 * The set leans vintage: hourglass, CRT prompt, film roll,
 * quill, viewfinder portrait — objects from the darkroom era
 * rather than modern glyphs.
 */
export const navItems: NavItem[] = [
  {
    id: 'now',
    label: { en: 'Now', 'zh-hk': '近況' },
    // material symbols "hourglass_empty" — time running through glass
    icon: 'M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z',
  },
  {
    id: 'projects',
    label: { en: 'Projects', 'zh-hk': '項目' },
    // material symbols "terminal" — the CRT prompt, echoes $ whoami
    icon: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z',
  },
  {
    id: 'photography',
    label: { en: 'Photography', 'zh-hk': '攝影' },
    // material symbols "camera_roll" — the film canister + strip
    icon: 'M160-80q-33 0-56.5-23.5T80-160v-600q0-33 23.5-56.5T160-840h40v-40q0-17 11.5-28.5T240-920h160q17 0 28.5 11.5T440-880v40h40q33 0 56.5 23.5T560-760h320v600H560q0 33-23.5 56.5T480-80H160Zm0-80h320v-80h320v-440H480v-80H160v600Zm200-120h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80ZM320-460Z',
  },
  {
    id: 'writing',
    label: { en: 'Writing', 'zh-hk': '文章' },
    // material symbols "auto_stories" — an open book, one page mid-turn
    icon: 'M480-160q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm80-200v-380l200-200v400L560-360Zm-160 65v-396q-33-14-68.5-21.5T260-720q-37 0-72 7t-68 21v397q35-13 69.5-19t70.5-6q36 0 70.5 6t69.5 19Zm0 0v-396 396Z',
  },
  {
    id: 'about',
    label: { en: 'About', 'zh-hk': '關於' },
    // material symbols "frame_person" — a portrait in the viewfinder corners
    icon: 'M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560ZM240-240v-76q0-21 10.5-39.5T279-385q46-27 96.5-41T480-440q54 0 104.5 14t96.5 41q18 11 28.5 29.5T720-316v76H240Zm240-120q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm0-240Zm0 280h154-308 154ZM160-80q-33 0-56.5-23.5T80-160v-160h80v160h160v80H160ZM80-640v-160q0-33 23.5-56.5T160-880h160v80H160v160H80ZM640-80v-80h160v-160h80v160q0 33-23.5 56.5T800-80H640Zm160-560v-160H640v-80h160q33 0 56.5 23.5T880-800v160h-80Z',
  },
];
