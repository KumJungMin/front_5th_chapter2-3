import type { Comment } from "@/entities/comment/model/types"
import type { Post } from "@/entities/post/model/types"

export const fetchComments = async (postId: Post["id"]): Promise<{ comments: Comment[] }> => {
  const response = await fetch(`/api/comments/post/${postId}`)
  if (!response.ok) throw new Error("Failed to fetch comments")
  return response.json()
}
