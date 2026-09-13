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
    │   └── navigation.ts    # 顶部导航（id + 双语 label + 图标 path）
    ├── i18n/
    │   ├── config.ts        # locale 路由（/ 与 /zh-hk/）
    │   ├── en.ts            # 英文界面文案（字典结构的源头）
    │   └── zh-hk.ts         # 繁中界面文案
    ├── types/
    │   └── index.ts         # 所有数据文件的 TypeScript 类型
    ├── components/          # Header / Footer + 六个 section 组件
    ├── layouts/
    │   └── BaseLayout.astro # <head>、菲林边装饰、回顶按钮
    ├── pages/
    │   ├── index.astro      # /        （英文）
    │   └── zh-hk/index.astro# /zh-hk/  （繁中）
    ├── assets/photos/       # 照片源文件（original/ 内的原图不入库）
    └── styles/global.css    # 全局 token、reset、公共样式
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

`slot` 控制桌面端宽度档位：`ph-a` 窄 / `ph-b` 宽 / `ph-c`、`ph-d` 中。
`title` / `location` / `year` 是给将来的独立摄影页预留的，现在不渲染。

**加文章入口** → `src/data/writing.ts`

每条是一个 `{ time, title, excerpt }`，两语言各填一份；文章正式发布后补
`href` 字段即可变成链接。

**改导航** → `src/data/navigation.ts`

`id` 必须对得上页面 section 的 id（锚点就是 `#id`）。

顶部导航是纯图标：`label` 同时充当链接的 `aria-label` 和悬停 /
键盘聚焦时的 tooltip 文案（跟随页面语言）；`icon` 是单个 `<path>` 的
`d` 数据（viewBox 固定 `0 -960 960 960`，SVG 外壳由 Header.astro 统一
提供）。换图标：到 [google/material-design-icons](https://github.com/google/material-design-icons)
（Apache 2.0）的 `symbols/web/<名称>/materialsymbolsoutlined/<名称>_24px.svg`
复制 `<path d="…">` 内容填进 `icon` 即可，无需装任何图标库。每个图标点击后
有专属微动画（沙漏翻转 / 终端闪屏 / 胶片过片 / 书页翻面 / 对焦缩放），
keyframes 定义在 `Header.astro`，按 `data-icon` 关联。

**改界面文案 / 翻译** → `src/i18n/en.ts` 和 `src/i18n/zh-hk.ts`

en.ts 是字典结构的源头，zh-hk.ts 必须逐字段对应（TypeScript 会在构建时
检查，漏填会报错）。改完记得两边同步。

**改域名 / GitHub / Logo / Email** → `src/config/site.ts`

全站引用这一处，不用全局搜索。

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
