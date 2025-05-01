import type { Comment } from "@/entities/comment/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const deleteComment = async (id: Comment["id"]): Promise<Comment> => {
  const response = await axiosInstance.delete<Comment>(`/comments/${id}`)
  return response.data
}
