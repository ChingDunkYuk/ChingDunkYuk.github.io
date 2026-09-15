import type { Project } from '../types';

/**
 * Projects — one entry per card in the projects section.
 * Add a project by appending an object here; the section component
 * reads this list, no template edits needed.
 *
 * An entry without `github` stays inert ("repo not public yet") —
 * no link, no ↗ affordance.
 */
export const projects: Project[] = [
  {
    title: 'What2Eat',
    description: {
      en: "The hardest question of the day, outsourced. A small decision engine for “what's for lunch?”",
      'zh-hk': '每日最難解嘅問題，外判俾程式——一個專門回答「今日食乜好」嘅小型決策引擎。',
    },
    status: {
      en: 'running · android app · decision engine',
      'zh-hk': '運行中 · android app · 決策引擎',
    },
    github: 'https://github.com/ChingDunkYuk/What2Eat',
  },
  {
    title: 'Random City',
    description: {
      en: "Can't decide where to go next? Let the dice pick a city — itinerary not included.",
      'zh-hk': '諗唔到下一站去邊？擲骰話事——行程自理。',
    },
    status: {
      en: 'beta · android app · travel',
      'zh-hk': 'beta · android app · 旅行',
    },
    github: 'https://github.com/ChingDunkYuk/random-city',
  },
  {
    title: 'TrainSense',
    description: {
      en: 'Training load, sleep, resting heart rate — the one system I monitor more closely than production. Health data, no gamification.',
      'zh-hk': '訓練負載、睡眠、靜止心率——呢個系統我睇得比 production 仲緊。健康數據，不搞遊戲化。',
    },
    status: {
      en: 'building · health · self-tracking',
      'zh-hk': '開發中 · 健康 · 自我追蹤',
    },
    // repo not public yet — no github field keeps the card inert
  },
];
