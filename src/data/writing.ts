import type { WritingItem } from '../types';

/**
 * Writing entries — one per row in the writing section.
 * `time` stays 'drafting' until posts go live; add `href`
 * once a post is published and the row becomes a link.
 */
export const writing: WritingItem[] = [
  {
    time: { en: 'drafting', 'zh-hk': '撰寫中' },
    title: { en: 'First post, still drying', 'zh-hk': '第一篇，仲晾緊' },
    excerpt: {
      en: 'Nothing published yet — drafts on uptime, side projects, and photography are stacking up. The first one is close.',
      'zh-hk': '暫時未有文章出街——講 uptime、side projects 同攝影嘅草稿一直堆積中，第一篇就快面世。',
    },
  },
];
