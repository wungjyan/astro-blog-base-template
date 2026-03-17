import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      // Required
      title: z.string(),
      description: z.string(),
      date: z.date(),
      // Optional
      tags: z.array(z.string()).default(['others']),
      ogImage: image().or(z.string()).optional(),
      draft: z.boolean().default(false)
    })
})

export const collections = { blog }
