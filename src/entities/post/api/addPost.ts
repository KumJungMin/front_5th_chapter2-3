import type { Post } from "@/entities/post/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const addPost = async (newPost: Post): Promise<{ post: Post }> => {
  const res = await axiosInstance.post(`/posts/add`, newPost)
  return res.data
}
