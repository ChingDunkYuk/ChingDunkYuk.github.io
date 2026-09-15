/**
 * English UI strings — the source of truth for the dictionary shape.
 * `UIStrings` is derived from this object; every other locale must
 * match it exactly (checked at build time by TypeScript).
 */
export const en = {
  meta: {
    title: 'Tung Yuk — IT Ops / Builder / Photographer',
    description:
      "Tung Yuk's personal site — projects, photography, and writing. Keeping systems alive at work, building unnecessary things after work.",
  },

  header: {
    navLabel: 'Primary',
    langLabel: 'Language',
    langEn: 'EN',
    langZh: '繁中',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
  },

  hero: {
    region: 'Intro',
    prompt: '$ whoami',
    role: 'IT Ops / Builder / Photographer',
    quote: '“Keeping systems alive at work, building unnecessary things after work.”',
    note: '# side projects > side quests.',
    scroll: 'scroll',
  },

  sections: {
    now: 'Now',
    projects: 'Projects',
    photography: 'Photography',
    writing: 'Writing',
    about: 'About',
  },

  // What's on the bench right now — the entries themselves live in
  // src/data/now.ts. `updatedPrefix` is the darkroom pun beside the
  // date stamp at the bottom of the readout.
  now: {
    prompt: '$ cat now.md',
    updatedPrefix: 'last developed',
  },

  // Project cards live in src/data/projects.ts.
  // Writing entries live in src/data/writing.ts.

  // Post page chrome — the article itself lives in
  // src/pages/writing/ (and its zh-hk twin).
  post: {
    backToWriting: 'back to writing',
  },

  photography: {
    listLabel: 'Photos',
    frames: ['unexposed', 'developing', 'light leak', 'not yet shot'],
    note: 'Darkroom in progress — film scans and contact sheets will land here.',
  },

  about: {
    paragraphs: [
      "I'm Tung Yuk. By day I keep systems alive — monitoring, backups, and the kind of infrastructure nobody notices until it breaks. After hours I build small, mostly unnecessary things and take photographs.",
      'This site is home base for both halves: the projects, the photos, and eventually some writing about running systems and chasing light.',
    ],
    githubLabel: 'github',
    emailLabel: 'email',
    emailPending: 'reserved — address coming soon',
  },

  footer: {
    builtWith: 'built with astro',
    backToTop: 'rewind to top',
  },
};

export type UIStrings = typeof en;
