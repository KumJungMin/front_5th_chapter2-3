import { create } from "zustand"
import type { Comment } from "@/entities/comment/model/types"

interface CommentStore {
  commentsByPost: Record<number, Comment[]>
  selectedComment: Comment | null

  setComments: (postId: number, comments: Comment[]) => void
  addComment: (postId: number, comment: Comment) => void
  updateComment: (postId: number, comment: Comment) => void
  deleteComment: (postId: number, commentId: number) => void
  likeComment: (postId: number, commentId: number) => void
  setSelectedComment: (comment: Comment | null) => void
}

export const useCommentStore = create<CommentStore>((set) => ({
  commentsByPost: {},
  selectedComment: null,

  setComments: (postId, comments) =>
    set((state) => ({
      commentsByPost: {
        ...state.commentsByPost,
        [postId]: comments,
      },
    })),

  addComment: (postId, comment) =>
    set((state) => ({
      commentsByPost: {
        ...state.commentsByPost,
        [postId]: [...(state.commentsByPost[postId] || []), comment],
      },
    })),

  updateComment: (postId, updated) =>
    set((state) => ({
      commentsByPost: {
        ...state.commentsByPost,
        [postId]: state.commentsByPost[postId].map((c) => (c.id === updated.id ? updated : c)),
      },
    })),

  deleteComment: (postId, commentId) =>
    set((state) => ({
      commentsByPost: {
        ...state.commentsByPost,
        [postId]: state.commentsByPost[postId].filter((c) => c.id !== commentId),
      },
    })),

  likeComment: (postId, commentId) =>
    set((state) => ({
      commentsByPost: {
        ...state.commentsByPost,
        [postId]: state.commentsByPost[postId].map((comment) =>
          comment.id === commentId ? { ...comment, likes: (comment?.likes || 0) + 1 } : comment,
        ),
      },
    })),

  setSelectedComment: (comment) => set({ selectedComment: comment }),
}))
