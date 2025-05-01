import type { Post } from "@/entities/post/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const deletePost = async (id: Post["id"]) => {
  try {
    const response = await axiosInstance.delete(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw new Error("Failed to delete post")
  }
}
