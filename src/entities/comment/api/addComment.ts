import type { Comment } from "@/entities/comment/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const addComment = async (newComment: Comment): Promise<{ comments: Comment[] }> => {
  const res = await axiosInstance.post("/comments/add", newComment)
  return res.data
}
