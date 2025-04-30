export interface SearchPostParams {
  searchQuery: string
}

// !! post 대한 타입을 끌어와야함!
type Post = {}

export const searchPosts = async (searchQuery: SearchPostParams): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(`/api/posts/search?q=${searchQuery}`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}
