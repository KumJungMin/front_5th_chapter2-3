import type { Comment } from "@/entities/comment/model/types"

export const deleteComment = async ({ id }: { id: Comment["id"] }): Promise<Comment> => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete comment")
  return response.json()
}
