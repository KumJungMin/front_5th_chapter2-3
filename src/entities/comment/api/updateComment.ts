export interface UpdateCommentParams {
  newPost: Comment
}

// !! post 대한 타입을 끌어와야함!
type Comment = {}

export const updateComment = async (comment: UpdateCommentParams): Promise<{ comments: Comment[] }> => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: comment.body }),
  })
  if (!response.ok) throw new Error("Failed to update comment")
  return response.json()
}
