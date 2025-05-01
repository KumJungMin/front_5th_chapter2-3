import type { Post } from "@/entities/post/model/types"

export const addPost = async (newPost: Post): Promise<{ post: Post }> => {
  const res = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
  if (!res.ok) throw new Error("Failed to add post")
  return res.json()
}
