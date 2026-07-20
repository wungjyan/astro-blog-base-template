// @ts-check
import { defineConfig } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'
import tailwindcss from '@tailwindcss/vite'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { transformerNotationDiff, transformerNotationFocus } from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    // Astro 7 defaults to Sätteri. Keep unified for remark/rehype math plugins.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    }),
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
      transformers: [transformerNotationDiff(), transformerNotationFocus()]
    }
  }
})
