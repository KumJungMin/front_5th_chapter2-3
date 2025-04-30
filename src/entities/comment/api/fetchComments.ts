export interface FetchCommentsParams {
  postId: string // !! postId에 대한 타입을 끌어와야함!
}

export interface Comment {}

export const fetchComments = async (postId: FetchCommentsParams): Promise<{ comments: Comment[] }> => {
  const response = await fetch(`/api/comments/post/${postId}`)
  if (!response.ok) throw new Error("Failed to fetch comments")
  return response.json()
}
