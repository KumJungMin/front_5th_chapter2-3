export interface AddPostParams {
  newPost: Post
}

// !! post 대한 타입을 끌어와야함!
type Post = {}

export const addPost = async (newPost: AddPostParams): Promise<{ post: Post }> => {
  const res = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
  if (!res.ok) throw new Error("Failed to add post")
  return res.json()
}
