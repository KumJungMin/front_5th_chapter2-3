// !! PUT vs PATCH 명명
// PUT은 전체를 업데이트하는 것이고 PATCH는 부분적으로 업데이트하는 것
// PUT일 때는 updateComment로 하고
// PATCH일 때는 patchComment로 함

export interface PatchCommentParams {
  newPost: Comment
}

// !! post 대한 타입을 끌어와야함!
type Comment = {}

// !!id와 교체할 데이터를 받도록 해야하지 않을까?
export const patchComment = async (comment: PatchCommentParams): Promise<{ comments: Comment[] }> => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: comment.body }),
    // body: JSON.stringify({ likes: comments[postId].find((c) => c.id === id).likes + 1 })
  })
  if (!response.ok) throw new Error("Failed to update comment")
  return response.json()
}
