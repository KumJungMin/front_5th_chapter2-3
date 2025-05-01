import type { Post } from "@/entities/post/model/types"

export const updatePost = async (post: Post): Promise<{ post: Post }> => {
  const response = await fetch(`/api/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  if (!response.ok) throw new Error("Failed to add post")
  return response.json()
}
