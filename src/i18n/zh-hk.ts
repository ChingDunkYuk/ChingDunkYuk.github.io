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
    now: '近況',
    projects: '項目',
    photography: '攝影',
    writing: '文章',
    about: '關於',
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

  // 而家搞緊乜——短期紀錄，焦點一轉就換。`updated` 用沖曬做梗。
  now: {
    prompt: '$ cat now.md',
    items: [
      { k: 'what2eat', v: '計劃緊開發月度報告。' },
      { k: 'random city', v: '追加緊新功能。' },
      { k: 'ricoh gxr', v: '計劃搜刮一台——模組化老相機，二手市場巡緊。' },
      { k: '呢個網站', v: '有得搞就搞——菲林邊、水印，仲有下一個小念頭。' },
    ],
    updated: '最近沖曬 · 2026-09',
  },

  // 專案名稱保留英文原名，只翻譯描述同界面文字。
  projects: [
    {
      name: 'What2Eat',
      description:
        '每日最難解嘅問題，外判俾程式——一個專門回答「今日食乜好」嘅小型決策引擎。',
      meta: '運行中 · android app · 決策引擎',
    },
    {
      name: 'Random City',
      description: '諗唔到下一站去邊？擲骰話事——行程自理。',
      meta: 'beta · android app · 旅行',
    },
    {
      name: 'TrainSense',
      description:
        '訓練負載、睡眠、靜止心率——呢個系統我睇得比 production 仲緊。健康數據，不搞遊戲化。',
      meta: '開發中 · 健康 · 自我追蹤',
    },
  ],

  photography: {
    listLabel: '照片',
    frames: ['未曝光', '沖晒中', '漏光', '未影'],
    note: '暗房趕工中——菲林掃描同 contact sheet 稍後登場。',
  },

  writing: {
    posts: [
      {
        time: '撰寫中',
        title: '第一篇，仲晾緊',
        excerpt:
          '暫時未有文章出街——講 uptime、side projects 同攝影嘅草稿一直堆積中，第一篇就快面世。',
      },
    ],
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
  },
};
