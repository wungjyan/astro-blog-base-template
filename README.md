# Astro 博客模板

基于 [Astro](https://astro.build/) 的现代化博客模板，使用 [Tailwind CSS](https://tailwindcss.com/) 构建样式。

> 可快速基于此模板开发你自己的博客

## 特性

- **Astro 6** - 最新版本框架
- **Tailwind CSS 4** - 原子化 CSS
- **Markdown 增强** - 数学公式 (KaTeX)、GitHub 风格提示框
- **代码高亮** - Shiki 语法高亮，支持 diff、高亮行等
- **排版主题** - 默认参考主题，基于 zinc/indigo 色系的文章排版样式
- **Prettier** - 集成 Astro 和 Tailwind 插件

## 快速开始

```bash
pnpm install   # 安装依赖
pnpm dev       # 启动开发服务器 (localhost:4321)
pnpm build     # 构建生产版本
```

环境要求：Node.js >= 22.12.0

## 项目结构

```text
src/
├── content/blog/     # Markdown 文章
├── pages/            # 页面路由
├── layouts/          # 布局组件
├── components/       # UI 组件
└── styles/           # 全局样式
```

## 写作

在 `src/content/blog/` 创建 `.md` 文件：

```yaml
---
title: "文章标题"
description: "文章描述"
date: 2025-12-25
tags: ["标签"]
---
```

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Shiki](https://shiki.style/) - 代码高亮
- [KaTeX](https://katex.org/) - 数学公式渲染
- [Prettier](https://prettier.io/) - 代码格式化