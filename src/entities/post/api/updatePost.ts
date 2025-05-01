import type { Post } from "@/entities/post/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const updatePost = async (post: Post): Promise<{ post: Post }> => {
  const response = await axiosInstance.put(`/posts/${post.id}`, post)
  return response.data
}
