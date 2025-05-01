import type { Post } from "@/entities/post/model/types"
import type { Tag } from "@/entities/tag/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const fetchPostsByTag = async (tag: Tag["slug"]): Promise<{ posts: Post[]; total: number }> => {
  const res = await axiosInstance.get(`/posts/tag/${tag}`)
  return res.data
}
