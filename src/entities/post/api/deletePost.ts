export interface DeletePostParams {
  id: Post["id"]
}

// !! post 대한 타입을 끌어와야함!
type Post = {
  id: string
}

export const deletePost = async (id: DeletePostParams) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete post")
  return response.json()
}
