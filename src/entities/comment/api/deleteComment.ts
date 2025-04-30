export interface DeleteCommentParams {
  id: Comment["id"]
}

// !! Comment 대한 타입을 끌어와야함!
type Comment = {
  id: string
}

export const deleteComment = async (id: DeleteCommentParams) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete comment")
  return response.json()
}
