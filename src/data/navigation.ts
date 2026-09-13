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
    // material symbols "history_edu" — the quill pen signing its line
    icon: 'M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z',
  },
  {
    id: 'about',
    label: { en: 'About', 'zh-hk': '關於' },
    // material symbols "frame_person" — a portrait in the viewfinder corners
    icon: 'M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560ZM240-240v-76q0-21 10.5-39.5T279-385q46-27 96.5-41T480-440q54 0 104.5 14t96.5 41q18 11 28.5 29.5T720-316v76H240Zm240-120q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm0-240Zm0 280h154-308 154ZM160-80q-33 0-56.5-23.5T80-160v-160h80v160h160v80H160ZM80-640v-160q0-33 23.5-56.5T160-880h160v80H160v160H80ZM640-80v-80h160v-160h80v160q0 33-23.5 56.5T800-80H640Zm160-560v-160H640v-80h160q33 0 56.5 23.5T880-800v160h-80Z',
  },
];
