import type { UIStrings } from './en';

/**
 * 繁體中文（香港）界面文案。
 *
 * 語感基準：港式書面語——以書面語為骨幹，保留香港慣用詞彙
 * （菲林、沖晒、砌、放工、諗唔到、食乜），技術名詞按香港
 * IT 界慣例保留英文（monitoring、backup、production、web app），
 * 避免台灣書面語（軟體、網路）同機械式普通話直譯。
 */
export const zhHK: UIStrings = {
  meta: {
    title: 'Tung Yuk — IT Ops / Builder / Photographer',
    description:
      'Tung Yuk 嘅個人網站：項目、攝影、文章。日間保住系統一命，放工就砌啲無謂嘢。',
  },

  header: {
    navLabel: '主目錄',
    langLabel: '語言',
    langEn: 'EN',
    langZh: '繁中',
  },

  hero: {
    region: '簡介',
    prompt: '$ whoami',
    role: 'IT Ops / Builder / Photographer',
    quote: '「日間保住系統一命，放工就砌啲無謂嘢。」',
    note: '# side projects > side quests.',
    scroll: '向下捲動',
  },

  sections: {
    now: '而家搞緊',
    projects: '精選項目',
    photography: '攝影',
    writing: '文章',
    about: '關於',
  },

  // 而家搞緊乜——條目本身喺 src/data/now.ts。`updatedPrefix` 係
  // readout 底部日期戳前面嘅沖曬字眼。
  now: {
    prompt: '$ cat now.md',
    updatedPrefix: '最近沖曬',
  },

  // 項目卡片喺 src/data/projects.ts。
  // 文章條目喺 src/data/writing.ts。

  photography: {
    listLabel: '照片',
    frames: ['未曝光', '沖晒中', '漏光', '未影'],
    note: '暗房趕工中——菲林掃描同 contact sheet 稍後登場。',
  },

  about: {
    paragraphs: [
      '我係 Tung Yuk。日間負責保住系統一命——monitoring、backup，同埋嗰啲唔壞冇人知嘅 infrastructure。收工之後就砌啲小型、多半無謂嘅嘢，同埋影相。',
      '呢個網站係兩邊嘅大本營：項目、相，同埋（終有一日）關於系統運作同追光嘅文字。',
    ],
    githubLabel: 'github',
    emailLabel: 'email',
    emailPending: '預留中——地址稍後公佈',
  },

  footer: {
    builtWith: '用 astro 砌',
    backToTop: '倒片返頁頂',
  },
};
