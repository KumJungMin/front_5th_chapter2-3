import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shared/ui"
import { renderComments } from "../components/renderComments"

export const postDetailDialog = (props) => {
  const {
    showPostDetailDialog,
    setShowPostDetailDialog,
    selectedPost,
    comments,
    searchQuery,
    setShowAddCommentDialog,
    setNewComment,
    setSelectedComment,
    setShowEditCommentDialog,
    highlightText,
    likeComment,
    deleteComment,
  } = props
  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          {renderComments({
            postId: selectedPost?.id,
            comments,
            searchQuery,
            setShowAddCommentDialog,
            setNewComment,
            setSelectedComment,
            setShowEditCommentDialog,
            highlightText,
            likeComment,
            deleteComment,
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
