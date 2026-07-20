# Astro 博客模板

基于 [Astro 7](https://astro.build/) 和 [Tailwind CSS 4](https://tailwindcss.com/) 的现代博客模板，支持内容集合、数学公式与代码高亮。

> 可快速基于此模板开发你自己的博客

## 特性

- **Astro 7** - 基于内容集合的静态博客
- **Tailwind CSS 4** - 通过 Vite 插件构建样式
- **Markdown 增强** - 使用 remark、rehype 和 KaTeX 渲染数学公式
- **代码高亮** - 使用 Shiki，支持 diff 和聚焦行标记
- **内容校验** - 使用 Astro Content Collections 和 Zod 校验文章 frontmatter
- **代码质量** - 集成 Astro 类型检查和 Prettier 格式化

## 快速开始

```bash
pnpm install  # 安装依赖
pnpm dev      # 启动开发服务器：http://localhost:4321
pnpm check    # 运行 Astro 和 TypeScript 检查
pnpm build    # 构建生产版本
pnpm preview  # 本地预览生产构建
```

环境要求：Node.js >= 22.12.0

## 项目结构

```text
src/
├── content/blog/       # Markdown 文章
├── layouts/            # 页面布局
├── pages/              # Astro 页面与动态路由
├── styles/             # 全局样式和文章排版
├── utils/              # 文章查询与排序工具
├── content.config.ts   # 内容集合与 frontmatter schema
└── site.config.ts      # 站点标题和描述
```

## 写作

在 `src/content/blog/` 创建 `.md` 文件：

```yaml
---
title: '文章标题'
description: '文章描述'
date: 2025-12-25
tags: ['Astro', '博客']
draft: false
---
```

`title`、`description` 和 `date` 为必填字段。`tags` 默认为 `['others']`，`draft` 默认为 `false`，还可以通过 `ogImage` 设置文章分享图片。

### 数学公式

行内公式使用 `$...$`，块级公式使用 `$$...$$`：

```markdown
质能方程为 $E = mc^2$。

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

Astro 7 默认使用 Sätteri Markdown 处理器。本模板为了兼容 `remark-math` 和 `rehype-katex`，在 [`astro.config.mjs`](./astro.config.mjs) 中显式使用 unified 处理管线。

## 技术栈

- [Astro 7](https://astro.build/) - 静态站点生成器与内容集合
- [Tailwind CSS 4](https://tailwindcss.com/) - CSS 框架和 Vite 插件
- [remark](https://remark.js.org/) / [rehype](https://github.com/rehypejs/rehype) - Markdown 与 HTML 处理
- [Shiki](https://shiki.style/) - 代码高亮
- [KaTeX](https://katex.org/) - 数学公式渲染
- [Prettier](https://prettier.io/) - 代码格式化
