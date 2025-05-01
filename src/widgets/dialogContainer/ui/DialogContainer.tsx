import {
  AddPostDialog,
  EditPostDialog,
  AddCommentDialog,
  EditCommentDialog,
  PostDetailDialog,
  UserDialog,
} from "@/features/dialogs/ui"

import { useDialogLogic } from "../model/useDialogLogic"

export const DialogContainer = () => {
  const {
    selectedPost,
    selectedUser,
    search,
    commentsByPost,
    selectedPostId,
    selectedComment,

    showEditDialog,
    showAddPostDialog,
    showPostDetailDialog,
    showAddCommentDialog,
    showEditCommentDialog,
    showUserDetailDialog,

    handleAddPost,
    handleUpdatePost,
    handleAddComment,
    handleUpdateComment,
    handleDeleteComment,
    handleLikeComment,
    handleEditComment,
    toggleDialog,
  } = useDialogLogic()

  return (
    <>
      <AddPostDialog open={showAddPostDialog} onOpenChange={() => toggleDialog("addPost")} onSubmit={handleAddPost} />

      <EditPostDialog
        open={showEditDialog}
        onOpenChange={() => toggleDialog("editPost")}
        post={selectedPost}
        onSubmit={handleUpdatePost}
      />

      <PostDetailDialog
        open={showPostDetailDialog}
        onOpenChange={() => toggleDialog("postDetail")}
        post={selectedPost}
        search={search}
        comments={commentsByPost[selectedPostId] || []}
        onAddComment={() => toggleDialog("addComment")}
        onEditComment={handleEditComment}
        onDeleteComment={handleDeleteComment}
        onLikeComment={handleLikeComment}
      />

      <AddCommentDialog
        open={showAddCommentDialog}
        onOpenChange={() => toggleDialog("addComment")}
        postId={selectedPostId}
        onSubmit={handleAddComment}
      />

      <EditCommentDialog
        open={showEditCommentDialog}
        onOpenChange={() => toggleDialog("editComment")}
        comment={selectedComment}
        onSubmit={handleUpdateComment}
      />

      <UserDialog open={showUserDetailDialog} onOpenChange={() => toggleDialog("userDetail")} user={selectedUser} />
    </>
  )
}
