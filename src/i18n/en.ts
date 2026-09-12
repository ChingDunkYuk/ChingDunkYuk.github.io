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
    now: 'Now',
    projects: 'Projects',
    photography: 'Photography',
    writing: 'Writing',
    about: 'About',
    langLabel: 'Language',
    langEn: 'EN',
    langZh: '繁中',
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
    projects: 'Selected Projects',
    photography: 'Photography',
    writing: 'Writing',
    about: 'About',
  },

  // What's on the bench right now — short-lived entries, swapped out
  // whenever the focus shifts. `updated` is the darkroom pun for the
  // stamp at the bottom of the readout.
  now: {
    prompt: '$ cat now.md',
    items: [
      { k: 'what2eat', v: 'planning the monthly report feature.' },
      { k: 'random city', v: 'adding the next round of features.' },
      { k: 'ricoh gxr', v: 'hunting the used market for one — the modular old camera.' },
      { k: 'this site', v: 'endless tinkering — film edges, watermarks, and the next small idea.' },
    ],
    updated: 'last developed · 2026-09',
  },

  // Project names stay in English across locales; only the copy translates.
  projects: [
    {
      name: 'What2Eat',
      description:
        "The hardest question of the day, outsourced. A small decision engine for “what's for lunch?”",
      meta: 'running · android app · decision engine',
    },
    {
      name: 'Random City',
      description:
        "Can't decide where to go next? Let the dice pick a city — itinerary not included.",
      meta: 'beta · android app · travel',
    },
    {
      name: 'TrainSense',
      description:
        'Training load, sleep, resting heart rate — the one system I monitor more closely than production. Health data, no gamification.',
      meta: 'building · health · self-tracking',
    },
  ],

  photography: {
    listLabel: 'Photos',
    frames: ['unexposed', 'developing', 'light leak', 'not yet shot'],
    note: 'Darkroom in progress — film scans and contact sheets will land here.',
  },

  writing: {
    posts: [
      {
        time: 'drafting',
        title: 'First post, still drying',
        excerpt:
          'Nothing published yet — drafts on uptime, side projects, and photography are stacking up. The first one is close.',
      },
    ],
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
  },
};

export type UIStrings = typeof en;
