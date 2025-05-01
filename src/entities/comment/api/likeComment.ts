import type { Comment } from "@/entities/comment/model/types"
import { axiosInstance } from "@/shared/lib/axios"

type LikeCommentParams = {
  id: Comment["id"]
  currentLikes: Comment["likes"]
}

export const likeComment = async ({ id, currentLikes }: LikeCommentParams): Promise<Comment> => {
  const { data } = await axiosInstance.patch<Comment>(`/comments/${id}`, {
    likes: currentLikes + 1,
  })
  return data
}
