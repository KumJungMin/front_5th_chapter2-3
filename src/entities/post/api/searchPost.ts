import type { Post } from "@/entities/post/model/types"

export const searchPosts = async (searchQuery: string): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(`/api/posts/search?q=${searchQuery}`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}
