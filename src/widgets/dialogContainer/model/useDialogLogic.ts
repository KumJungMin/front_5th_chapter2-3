import { useDialogStore } from "@/features/dialogs/model/useDialogStore"
import { usePostStore } from "@/features/posts/model/usePostStore"
import { useCommentStore } from "@/features/comment/model/useCommentStore"
import { useUserStore } from "@/features/user/model/useUserStore"

import { useAddPost } from "@/features/posts/api/useAddPost"
import { useUpdatePost } from "@/features/posts/api/useUpdatePost"
import { useAddComment } from "@/features/comment/api/useAddComment"
import { useUpdateComment } from "@/features/comment/api/useUpdateComment"
import { useDeleteComment } from "@/features/comment/api/useDeleteComment"
import { useLikeComment } from "@/features/comment/api/useLikeComment"
import { usePostTableStore } from "@/features/posts/model/usePostTableStore"

export const useDialogLogic = () => {
  const dialog = useDialogStore()

  const { search } = usePostTableStore()
  const { selectedPost, addPost: addPostToStore, updatePost: updatePostInStore } = usePostStore()
  const { addComment, commentsByPost, updateComment, deleteComment, likeComment, selectedComment, setSelectedComment } =
    useCommentStore()
  const { selectedUser } = useUserStore()

  const addPost = useAddPost()
  const updatePost = useUpdatePost()
  const addCmt = useAddComment()
  const updateCmt = useUpdateComment()
  const delCmt = useDeleteComment()
  const likeCmt = useLikeComment()

  const selectedPostId = selectedPost?.id

  const handleAddPost = (post) =>
    addPost.mutate(post, {
      onSuccess: (created) => {
        addPostToStore({ ...created, tags: created.tags || [] })
        toggleDialog("addPost", false)
      },
    })

  const handleUpdatePost = (post) =>
    updatePost.mutate(post, {
      onSuccess: (updated) => {
        updatePostInStore(updated)
        toggleDialog("editPost", false)
      },
    })

  const handleAddComment = (comment) =>
    addCmt.mutate(comment, {
      onSuccess: (created) => {
        addComment(selectedPostId, created)
        toggleDialog("addComment", false)
      },
    })

  const handleUpdateComment = (comment) =>
    updateCmt.mutate(comment, {
      onSuccess: (updated) => {
        updateComment(selectedPostId, updated)
        toggleDialog("editComment", false)
      },
    })

  const handleDeleteComment = (comment) => {
    delCmt.mutate({ id: comment.id, postId: selectedPostId })
    deleteComment(selectedPostId, comment.id)
    toggleDialog("editComment", false)
  }

  const handleLikeComment = (comment) => {
    const currentLikes = comment?.likes ?? 0
    likeCmt.mutate({ id: comment.id, postId: selectedPostId, currentLikes })
    likeComment(selectedPostId, comment.id)
  }

  const handleEditComment = (comment) => {
    setSelectedComment(comment)
    toggleDialog("editComment", true)
  }

  const toggleDialog = (dialogName, isOpen) => {
    if (isOpen === undefined) dialog.toggle(dialogName)
    else dialog.toggle(dialogName, isOpen)
  }

  return {
    dialog,
    selectedPost,
    selectedUser,
    search,
    commentsByPost,
    selectedPostId,
    selectedComment,

    showEditDialog: dialog.editPost,
    showAddPostDialog: dialog.addPost,
    showPostDetailDialog: dialog.postDetail,
    showAddCommentDialog: dialog.addComment,
    showEditCommentDialog: dialog.editComment,
    showUserDetailDialog: dialog.userDetail,

    handleAddPost,
    handleUpdatePost,
    handleAddComment,
    handleUpdateComment,
    handleDeleteComment,
    handleLikeComment,
    setSelectedComment,
    handleEditComment,
    toggleDialog,
  }
}
