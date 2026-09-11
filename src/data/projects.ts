/**
 * External links for the selected projects. Keys map 1:1 to the
 * `name` fields in the i18n dictionaries (src/i18n/en.ts /
 * zh-hk.ts); URLs are language-independent, so they live here
 * instead of being duplicated across both dictionaries.
 *
 * TrainSense: repo not public yet — '#' keeps the card inert until
 * there is a real URL to point at.
 */
export const projectLinks: Record<string, string> = {
  What2Eat: 'https://github.com/ChingDunkYuk/What2Eat',
  'Random City': 'https://github.com/ChingDunkYuk/random-city',
  TrainSense: '#',
};
