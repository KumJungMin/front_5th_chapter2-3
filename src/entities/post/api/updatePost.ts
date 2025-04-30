export interface UpdatePostParams {
  newPost: Post
}

// !! post 대한 타입을 끌어와야함!
type Post = {}

export const updatePost = async (post: UpdatePostParams): Promise<{ post: Post }> => {
  const response = await fetch(`/api/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  if (!response.ok) throw new Error("Failed to add post")
  return response.json()
}
