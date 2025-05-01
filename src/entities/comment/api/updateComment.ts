import type { Comment } from "@/entities/comment/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const updateComment = async (comment: Comment): Promise<{ comments: Comment[] }> => {
  const response = await axiosInstance.put(`/comments/${comment.id}`, {
    body: comment.body,
  })
  return response.data
}
