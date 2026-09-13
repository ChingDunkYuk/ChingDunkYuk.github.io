import type { NowData } from '../types';

/**
 * What's on the bench right now — short-lived entries, swapped
 * out whenever the focus shifts. Update this file (items +
 * `updated` stamp) whenever the focus changes; the section
 * component reads it directly.
 *
 * `updated` is the darkroom date stamp under the readout; the
 * "last developed" wording lives in the i18n dictionaries.
 */
export const now: NowData = {
  updated: '2026-09',
  items: [
    {
      name: { en: 'what2eat', 'zh-hk': 'what2eat' },
      description: {
        en: 'planning the monthly report feature.',
        'zh-hk': '計劃緊開發月度報告。',
      },
    },
    {
      name: { en: 'random city', 'zh-hk': 'random city' },
      description: {
        en: 'adding the next round of features.',
        'zh-hk': '追加緊新功能。',
      },
    },
    {
      name: { en: 'ricoh gxr', 'zh-hk': 'ricoh gxr' },
      description: {
        en: 'hunting the used market for one — the modular old camera.',
        'zh-hk': '計劃搜刮一台——模組化老相機，二手市場巡緊。',
      },
    },
    {
      name: { en: 'this site', 'zh-hk': '呢個網站' },
      description: {
        en: 'endless tinkering — film edges, watermarks, and the next small idea.',
        'zh-hk': '有得搞就搞——菲林邊、水印，仲有下一個小念頭。',
      },
    },
  ],
};
