import type { Post } from "@/entities/post/model/types"

export const fetchPostsByTag = async (tag: string): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(`/api/posts/tag/${tag}`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}
