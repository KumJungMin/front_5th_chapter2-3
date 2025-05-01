import type { Comment } from "@/entities/comment/model/types"
import type { Post } from "@/entities/post/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const fetchComments = async (postId: Post["id"]): Promise<{ comments: Comment[] }> => {
  const response = await axiosInstance.get(`/comments/post/${postId}`)
  if (response.status !== 200) throw new Error("Failed to fetch comments")
  return response.data
}
