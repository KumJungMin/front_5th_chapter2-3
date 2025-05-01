import type { Comment } from "@/entities/comment/model/types"

export const addComment = async (newComment: Comment): Promise<{ comments: Comment[] }> => {
  const res = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  })
  if (!res.ok) throw new Error("Failed to add comment")
  return res.json()
}
