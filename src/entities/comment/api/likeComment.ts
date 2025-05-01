import type { Comment } from "@/entities/comment/model/types"

type LikeCommentParams = {
  id: Comment["id"]
  currentLikes: Comment["likes"]
}

export const likeComment = async ({ id, currentLikes }: LikeCommentParams): Promise<Comment> => {
  const res = await fetch(`/api/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes: currentLikes + 1 }),
  })
  return res.json()
}
