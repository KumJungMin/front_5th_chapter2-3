import { create } from "zustand"
import { Comment } from "@/entities/comment/model/types"

interface CommentStore {
  commentsByPostId: Record<number, Comment[]>
  selectedComment: Comment | null

  setComments: (postId: number, comments: Comment[]) => void
  addComment: (postId: number, comment: Comment) => void
  updateComment: (postId: number, updated: Comment) => void
  deleteComment: (postId: number, commentId: number) => void

  selectComment: (comment: Comment | null) => void
}

export const useCommentStore = create<CommentStore>((set) => ({
  commentsByPostId: {},
  selectedComment: null,

  setComments: (postId, comments) =>
    set((state) => ({
      commentsByPostId: { ...state.commentsByPostId, [postId]: comments },
    })),

  addComment: (postId, comment) =>
    set((state) => ({
      commentsByPostId: {
        ...state.commentsByPostId,
        [postId]: [...(state.commentsByPostId[postId] || []), comment],
      },
    })),

  updateComment: (postId, updated) =>
    set((state) => ({
      commentsByPostId: {
        ...state.commentsByPostId,
        [postId]: state.commentsByPostId[postId]?.map((c) => (c.id === updated.id ? updated : c)),
      },
    })),

  deleteComment: (postId, commentId) =>
    set((state) => ({
      commentsByPostId: {
        ...state.commentsByPostId,
        [postId]: state.commentsByPostId[postId]?.filter((c) => c.id !== commentId),
      },
    })),

  selectComment: (comment) => set({ selectedComment: comment }),
}))
