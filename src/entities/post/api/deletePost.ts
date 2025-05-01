import type { Post } from "@/entities/post/model/types"

export const deletePost = async (id: Post["id"]) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete post")
  return response.json()
}
