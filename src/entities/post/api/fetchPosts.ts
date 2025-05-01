import type { Post } from "@/entities/post/model/types"

interface FetchPostsParams {
  limit?: number
  skip?: number
}

export const fetchPosts = async ({
  limit = 10,
  skip = 0,
}: FetchPostsParams): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}
