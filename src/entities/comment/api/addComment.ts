export interface AddCommentParams {
  newComment: Comment
}

// !! comment 대한 타입을 끌어와야함!
type Comment = {}

export const addComment = async (newComment: AddCommentParams): Promise<{ comments: Comment[] }> => {
  const res = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  })
  if (!res.ok) throw new Error("Failed to add comment")
  return res.json()
}
