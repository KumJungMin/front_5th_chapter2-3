import type { Post } from "@/entities/post/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const searchPosts = async (searchQuery: string): Promise<{ posts: Post[]; total: number }> => {
  const res = await axiosInstance.get(`/posts/search`, { params: { q: searchQuery } })
  return res.data
}
