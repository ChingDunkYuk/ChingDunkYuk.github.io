# tungyuk.github.io

Astro 静态个人网站，双语（en / 繁中），部署在 GitHub Pages。

## 目录结构

```text
/
├── astro.config.ts          # 站点 URL、i18n 路由（值来自 src/config/site.ts）
├── .github/workflows/       # push main 后自动构建并部署
├── public/                  # favicon、logo 等静态文件（原样拷贝）
├── scripts/watermark.py     # 照片水印脚本（见「换照片」）
└── src/
    ├── config/
    │   └── site.ts          # 站点身份：域名 / GitHub / email / logo / 默认语言
    ├── data/                # ★ 内容都在这里，改内容不用碰组件
    │   ├── projects.ts      # 项目卡片
    │   ├── photography.ts   # 照片登记（featured 控制上不上首页）
    │   ├── now.ts           # 「而家搞緊」条目 + 日期戳
    │   ├── writing.ts       # 文章列表
    │   ├── navigation.ts    # 顶部导航（id + 双语 label + 图标 path）
    │   └── ambient.ts       # 浅色主题的漂浮终端命令（水印层文案）
    ├── i18n/
    │   ├── config.ts        # locale 路由（/ 与 /zh-hk/）
    │   ├── en.ts            # 英文界面文案（字典结构的源头）
    │   └── zh-hk.ts         # 繁中界面文案
    ├── types/
    │   └── index.ts         # 所有数据文件的 TypeScript 类型
    ├── components/          # Header / Footer、六个 section、Home（首页组装）、
    │                        # Post（文章排版）、LogoEasterEgg（Logo 五连击彩蛋）
    ├── layouts/
    │   └── BaseLayout.astro # <head>、菲林边装饰、主题切换、回顶按钮、彩蛋挂载
    ├── pages/
    │   ├── index.astro      # /          （英文首页）
    │   ├── writing/         # 文章页（英文，一篇一个 .astro）
    │   ├── zh-hk/index.astro# /zh-hk/    （繁中首页）
    │   └── zh-hk/writing/   # 文章页（繁中，与英文路径一一对应）
    ├── assets/photos/       # 照片源文件（original/ 内的原图不入库）
    └── styles/global.css    # 全局 token（深 / 浅双主题）、reset、公共样式
```

## 怎么改内容

**加 / 改项目** → `src/data/projects.ts`

往数组里加一个对象即可，两个字语言都要填：

```ts
{
  title: 'What2Eat',
  description: { en: '…', 'zh-hk': '…' },
  status: { en: 'running · android app', 'zh-hk': '運行中 · android app' },
  github: 'https://github.com/ChingDunkYuk/What2Eat',
}
```

不填 `github` 的项目卡片保持不可点（代表「未公开」）。

**更新 Now（每月）** → `src/data/now.ts`

改 `items` 数组和 `updated` 日期戳（如 `'2026-09'`），readout 底部的
「last developed / 最近沖曬」字眼在两个字典里，一般不用动。

**加 / 换照片** → `src/assets/photos/` + `src/data/photography.ts`

1. 原图放 `src/assets/photos/original/`（gitignore，只留在本机）
2. 跑 `python scripts/watermark.py`——生成带「© by klaus」角标的水印图到 `src/assets/photos/`
3. 在 `src/data/photography.ts` 导入并登记，`featured: true` 才会出现在首页

`slot` 控制桌面端宽度档位：`ph-a` 窄（2/6 列）/ `ph-b` 宽（4/6）/ `ph-c`、`ph-d` 中（3/6）。
照片保留原始比例，网格行高由行内最高者决定且不会回填——所以**顺序即行**：排在
一起的照片要「跨度 × (图高÷图宽)」两两接近，且每行跨度合计为 6，否则矮的下方会
出现空洞。当前 12 张的行规划见 `photography.ts` 头部注释，插新照片时按同一规则
找匹配行。
`title` / `location` / `year` 是给将来的独立摄影页预留的，现在不渲染。

**写文章 / 发新文章** → `src/pages/writing/` + `src/data/writing.ts`

发一篇新文章两步：

1. 建两个页面：`src/pages/writing/<slug>.astro`（英文）和
   `src/pages/zh-hk/writing/<slug>.astro`（繁中，路径一一对应）。外壳是
   BaseLayout——传 `locale` 和 `path`（规范路径，决定 canonical / hreflang /
   语言切换）以及 `title` / `description`；正文整体塞进 `Post` 组件
   （props 就 `title`、`date` 两个）。排版由 Post.astro 统一：衬线正文、
   引用橙色左边线、结尾句橙色、中文自动直立不斜体，文末返回链接指向
   首页 #writing 锚点（自动带语言）。
2. 登记：`src/data/writing.ts` 加一条 `{ time, title, excerpt, href }`，
   两语言各填一份；`href` 填英文版规范路径（如 `'/writing/<slug>/'`），
   两语言的首页行都会自动变成链接。没有 `href` 的条目保持不可点（草稿位）。

**改导航** → `src/data/navigation.ts`

`id` 必须对得上页面 section 的 id（锚点就是 `#id`）。

顶部导航是纯图标：`label` 同时充当链接的 `aria-label` 和悬停 /
键盘聚焦时的 tooltip 文案（跟随页面语言）；`icon` 是单个 `<path>` 的
`d` 数据（viewBox 固定 `0 -960 960 960`，SVG 外壳由 Header.astro 统一
提供）。换图标：到 [google/material-design-icons](https://github.com/google/material-design-icons)
（Apache 2.0）的 `symbols/web/<名称>/materialsymbolsoutlined/<名称>_24px.svg`
复制 `<path d="…">` 内容填进 `icon` 即可，无需装任何图标库。每个图标悬停
（或键盘聚焦）时有专属微动画（沙漏翻转 / 终端闪屏 / 胶片过片 / 书页翻面 /
对焦缩放），keyframes 定义在 `Header.astro`，按 `data-icon` 关联。

**主题（深色 / 浅色）** → `src/styles/global.css` + `src/data/ambient.ts`

双主题：darkroom（深色，默认——菲林暗房）与 paper（浅色——冲印样张）。

- 全部颜色走 `:root` 里的 token（深色默认值），浅色只在
  `html[data-theme='light']` 块里覆盖同名 token——改任何一边都不会波及另一
  边；组件永远只引用变量，不写死颜色。
- 切换按钮在 Header（图标永远显示「将要切到」的主题），选择存在
  localStorage `tungyuk:theme`（GitHub Pages 同 origin 多项目共存，key 带
  前缀防撞），首次访问默认深色。恢复脚本在 BaseLayout `<head>` 里
  `is:inline`，先于首绘执行，不会闪。
- 少数没法走 token 的硬编码装饰（Header 的奶油 logo、菲林齿孔 data-URI）
  在各自组件里有对应的 `[data-theme='light']` 覆盖：logo 用 CSS filter 重
  上墨（不新增图片资产），齿孔 tile 换暖灰。
- 浅色专属的「漂浮终端命令」水印：文案在 `src/data/ambient.ts`（保持短
  小，长了会在窄屏被裁）；每条的泳道 / 时长 / 相位 / 静止位由
  BaseLayout.astro 按 `nth-child` 索引分配——纯 CSS、服务端渲染、每次
  访问分布一致；深色下整层 `display: none`，对深色像素零影响。
- 无障碍：`prefers-reduced-motion` 下命令层冻结为静止散布；两套色板的
  正文对比度均过 WCAG AA（浅色数值审计记录在 global.css 注释里）。

**改界面文案 / 翻译** → `src/i18n/en.ts` 和 `src/i18n/zh-hk.ts`

en.ts 是字典结构的源头，zh-hk.ts 必须逐字段对应（TypeScript 会在构建时
检查，漏填会报错）。改完记得两边同步。

**改域名 / GitHub / Logo / Email** → `src/config/site.ts`

全站引用这一处，不用全局搜索。

**彩蛋（Logo 五连击）** → `src/components/LogoEasterEgg.astro`

连点左上角 Logo 5 次（间隔 ≤ 2 秒，超时重新计数）触发一条终端 toast：
打字机逐字打出、约 4.5 秒后淡出，再次五连击可再次触发。文案、触发
次数、间隔、停留时长都是文件顶部的常量，改一处即可。组件自成一体
（Header 不知情，事件走 document 委托），无 localStorage；遵循
`prefers-reduced-motion`（关动画时直接显示整句）。

## 命令

| 命令                   | 作用                                  |
| :--------------------- | :------------------------------------ |
| `npm install`          | 安装依赖（需要 Node ≥ 22.12）         |
| `npm run dev`          | 本地开发服务器 `localhost:4321`       |
| `npm run build`        | 构建到 `./dist/`                      |
| `npm run preview`      | 本地预览构建产物                      |

## 部署

push 到 `main` 分支即可——GitHub Actions 会自动构建并发布到 GitHub Pages
（`.github/workflows/deploy.yml`），不需要手动操作。

注意：本地 `npm run preview` 挂着时它会锁住 `dist/`，先停掉再重新 build，
否则旧文件残留会影响产物对比。
