import type { Photo } from '../types';

/**
 * HOW TO ADD / REPLACE A PHOTO
 * 1. drop the original file into src/assets/photos/original/
 *    (gitignored — originals stay on your machine only)
 * 2. run `python scripts/watermark.py` — bakes a small
 *    "© by klaus" corner mark into a copy placed in
 *    src/assets/photos/
 * 3. import the watermarked copy and register it below
 *
 * Astro optimizes every registered photo automatically (webp,
 * responsive sizes) — no manual resizing needed.
 *
 * Only entries with `featured: true` render on the homepage
 * contact sheet; everything else is reserved for the future
 * photography page (title / location / year feed that page).
 *
 * ORDER = ROWS. The desktop sheet is a 6-column grid; each
 * figure's rendered height is proportional to
 *
 *     span × (image height ÷ image width)
 *
 * so a row only sits flush when its members' span×ratio values
 * match (spans per row must also sum to 6 — CSS grid never
 * backfills, a short frame leaves a hole under itself for the
 * rest of the row). Current plan (ratio = h÷w):
 *
 *   01 alley-roots     ph-b 4×0.667 = 2.67 ┐ matched pair
 *   02 street-sunset   ph-a 2×1.334 = 2.67 ┘
 *   03 bark-light      ph-b 4×0.667 = 2.67 ┐ matched pair
 *   04 rail-fence      ph-a 2×1.366 = 2.73 ┘ (2% off)
 *   05 kengkou-station ph-c 3×1.500 = 4.50 ┐ matched pair
 *   06 delivery-lane   ph-c 3×1.500 = 4.50 ┘
 *   07 pavement-roots  ph-a 2×0.667 = 1.33 ┐
 *   08 workshop-light  ph-a 2×0.667 = 1.33 ├ window sets the
 *   09 window-sunset   ph-a 2×0.750 = 1.50 ┘ row (~11% holes)
 *   10 alley-gap       ph-a 2×1.777 = 3.55 ┐ B&W triptych,
 *   11 doorway-uncle   ph-a 2×1.777 = 3.55 ├ all matched
 *   12 tree-street     ph-a 2×1.777 = 3.55 ┘
 *
 * When inserting a photo, recompute its span×ratio and place
 * it in the row whose value it matches (ph-a=2, ph-b=4,
 * ph-c/ph-d=3 columns).
 *
 * import mongkok from '../assets/photos/mongkok-night.jpg';
 *
 * {
 *   src: mongkok,
 *   slot: 'ph-a',
 *   alt: { en: 'Neon signs in Mong Kok at night', 'zh-hk': '旺角霓虹夜色' },
 *   caption: { en: 'Mong Kok, night', 'zh-hk': '旺角，夜' },
 *   featured: true,
 * },
 */
import alleyGap from '../assets/photos/alley-gap.jpg';
import alleyRoots from '../assets/photos/alley-roots.jpg';
import barkLight from '../assets/photos/bark-light.jpg';
import deliveryLane from '../assets/photos/delivery-lane.jpg';
import doorwayUncle from '../assets/photos/doorway-uncle.jpg';
import kengkouStation from '../assets/photos/kengkou-station.jpg';
import pavementRoots from '../assets/photos/pavement-roots.jpg';
import railFence from '../assets/photos/rail-fence.jpg';
import streetSunset from '../assets/photos/street-sunset.jpg';
import treeStreet from '../assets/photos/tree-street.jpg';
import windowSunset from '../assets/photos/window-sunset.jpg';
import workshopLight from '../assets/photos/workshop-light.jpg';

export const photography: Photo[] = [
  {
    src: alleyRoots,
    slot: 'ph-b',
    alt: {
      en: 'Old alley with exposed tree roots and a hand-written shop sign',
      'zh-hk': '舊城小巷，樹根露出地面，旁邊一塊手寫招牌',
    },
    caption: { en: 'old town alley', 'zh-hk': '舊城老巷' },
    featured: true,
  },
  {
    src: streetSunset,
    slot: 'ph-a',
    alt: {
      en: 'A low orange sun at the end of a narrow street, pedestrians and parked scooters in golden-hour silhouette',
      'zh-hk': '窄街盡頭一輪橙紅落日，行人同泊喺路邊嘅電單車喺逆光下變成剪影',
    },
    caption: { en: "sun at street's end", 'zh-hk': '街尾日落' },
    featured: true,
  },
  {
    src: barkLight,
    slot: 'ph-b',
    alt: {
      en: 'Looking up a tree trunk, rough bark in shadow against sunlit green leaves',
      'zh-hk': '仰視樹幹，粗糙嘅樹皮留喺暗處，綠葉俾陽光照到透光',
    },
    caption: { en: 'bark and leaves', 'zh-hk': '樹皮同綠葉' },
    featured: true,
  },
  {
    src: railFence,
    slot: 'ph-a',
    alt: {
      en: 'A train on converging tracks seen through a blurred chain-link fence, in black and white',
      'zh-hk': '黑白相：隔住一層矇矓嘅鐵絲網，望住列車喺交匯嘅路軌上慢慢行過',
    },
    caption: { en: 'train behind the wire', 'zh-hk': '鐵網後嘅列車' },
    featured: true,
  },
  {
    src: kengkouStation,
    slot: 'ph-c',
    alt: {
      en: 'From under an overpass by Kengkou station exit D, a bus pulls away past rows of parked scooters, in black and white',
      'zh-hk': '黑白相：坑口站 D 出口天橋底望落去，一地電單車，一架巴士啱啱開走',
    },
    caption: { en: 'kengkou station, exit D', 'zh-hk': '坑口站 D 出口' },
    featured: true,
  },
  {
    src: deliveryLane,
    slot: 'ph-c',
    alt: {
      en: 'A food-delivery rider in yellow waits at the mouth of an old lane, tiled eaves and a vertical shop sign behind',
      'zh-hk': '著住黃色衫嘅外賣仔停喺舊巷口，後面係瓦簷同一塊直書招牌',
    },
    caption: { en: 'rider at the lane mouth', 'zh-hk': '巷口外賣仔' },
    featured: true,
  },
  {
    src: pavementRoots,
    slot: 'ph-a',
    alt: {
      en: 'Tree roots spreading across stone pavement in hard afternoon light',
      'zh-hk': '午後硬光下，樹根橫過石板路蔓延',
    },
    caption: { en: 'roots on stone', 'zh-hk': '石板上的根' },
    featured: true,
  },
  {
    src: workshopLight,
    slot: 'ph-a',
    alt: {
      en: 'Workbench and wooden stool cut by shafts of window light',
      'zh-hk': '工作台同木凳，俾一道道窗光切開',
    },
    caption: { en: 'workshop light', 'zh-hk': '工房窗光' },
    featured: true,
  },
  {
    src: windowSunset,
    slot: 'ph-a',
    alt: {
      en: 'A sunset seen through a vehicle window, dark storm clouds above a glowing orange horizon',
      'zh-hk': '隔住車窗望出去嘅日落，暗雲壓頂，地平線上剩返一道橙光',
    },
    caption: { en: 'sunset through the window', 'zh-hk': '車窗日落' },
    featured: true,
  },
  {
    src: alleyGap,
    slot: 'ph-a',
    alt: {
      en: 'A sliver of street between two weathered residential buildings, overhead wires crossing the gap, in black and white',
      'zh-hk': '黑白相：兩棟舊樓之間只剩一線窄巷，電線喺頭頂交錯',
    },
    caption: { en: 'between two walls', 'zh-hk': '兩牆之間' },
    featured: true,
  },
  {
    src: doorwayUncle,
    slot: 'ph-a',
    alt: {
      en: 'An old man sits in his cluttered doorway, phone in one hand, putting his sandals back on, in black and white',
      'zh-hk': '黑白相：阿伯坐喺堆滿雜物嘅門口，一手攞住手機，慢慢著返對拖鞋',
    },
    caption: { en: 'uncle at his door', 'zh-hk': '門口嘅阿伯' },
    featured: true,
  },
  {
    src: treeStreet,
    slot: 'ph-a',
    alt: {
      en: 'A pedestrian crosses a street in dappled shade under a large tree beside old apartment blocks, in black and white',
      'zh-hk': '黑白相：舊樓旁邊一棵大樹，一個路人喺樹蔭碎光之下過馬路',
    },
    caption: { en: 'crossing in tree shade', 'zh-hk': '樹蔭下過路' },
    featured: true,
  },
];
