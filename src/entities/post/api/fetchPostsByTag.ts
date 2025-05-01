import type { Post } from "@/entities/post/model/types"
import type { Tag } from "@/entities/tag/model/types"

export const fetchPostsByTag = async (tag: Tag["slug"]): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(`/api/posts/tag/${tag}`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}
