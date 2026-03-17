import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'blog'>

export const getAllPosts = async (): Promise<Post[]> => {
  return await getCollection('blog', ({ data }: Post) => !data.draft)
}

export const getAllSortedPosts = async (): Promise<Post[]> => {
  const posts = await getAllPosts()
  return posts.sort(
    (a: Post, b: Post) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  )
}
