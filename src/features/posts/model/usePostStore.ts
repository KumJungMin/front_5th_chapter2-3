import { create } from "zustand"
import { Post } from "@/entities/post/model/types"

interface PostStore {
  posts: Post[]
  selectedPost: Post | null

  setPosts: (posts: Post[]) => void
  addPost: (post: Post) => void
  updatePost: (post: Post) => void
  deletePost: (id: number) => void

  setSelectedPost: (post: Post | null) => void
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  selectedPost: null,

  setPosts: (posts) => set({ posts }),

  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  updatePost: (updated) =>
    set((state) => ({
      posts: state.posts.map((post) => (post.id === updated.id ? updated : post)),
    })),

  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),

  setSelectedPost: (post) => set({ selectedPost: post }),
}))
