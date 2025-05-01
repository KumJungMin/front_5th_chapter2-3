export interface Comment {
  id: number
  postId: number
  userId: number
  body: string
  likes: number
  createdAt?: string
  updatedAt?: string
}
