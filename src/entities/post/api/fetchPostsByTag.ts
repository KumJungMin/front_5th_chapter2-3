// !! fetchPosts와 통합할지 고민
export interface FetchPostsByTagParams {
  tag: string
}

// !! post 대한 타입을 끌어와야함!
type Post = {}

export const fetchPostsByTag = async (tag: FetchPostsByTagParams): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(`/api/posts/tag/${tag}`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}
