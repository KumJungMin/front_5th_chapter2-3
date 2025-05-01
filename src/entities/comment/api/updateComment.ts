import type { Comment } from "@/entities/comment/model/types"

export const updateComment = async (comment: Comment): Promise<{ comments: Comment[] }> => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: comment.body }),
  })
  if (!response.ok) throw new Error("Failed to update comment")
  return response.json()
}
