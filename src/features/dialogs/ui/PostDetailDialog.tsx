import { Dialog, DialogContent, DialogHeader, DialogTitle, Button } from "@/shared/ui"
import { Edit2, Plus, ThumbsUp, Trash2 } from "lucide-react"
import { HighlightText } from "@/shared/ui/HighlightText"
import type { Post } from "@/entities/post/model/types"
import type { Comment } from "@/entities/comment/model/types"

interface Props {
  open: boolean
  post?: Post
  search: string
  comments: Comment[]

  onOpenChange: (v: boolean) => void
  onAddComment: () => void
  onEditComment: (comment: Comment) => void
  onLikeComment: (comment: Comment) => void
  onDeleteComment: (comment: Comment) => void
}

export const PostDetailDialog = ({
  open,
  post,
  comments,
  search,

  onOpenChange,
  onAddComment,
  onEditComment,
  onLikeComment,
  onDeleteComment,
}: Props) => {
  if (!post) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="max-w-3xl">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <HighlightText text={post.body} highlight={search} />
          <div className="mt-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold">댓글</h3>
              <Button size="sm" onClick={onAddComment}>
                <Plus className="w-3 h-3 mr-1" />
                댓글 추가
              </Button>
            </div>
            <div className="space-y-1">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
                  <div className="flex items-center space-x-2 overflow-hidden">
                    <span className="font-medium truncate">{comment.user.username}:</span>
                    <span className="truncate">
                      <HighlightText text={comment.body} highlight={search} />
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" onClick={() => onLikeComment(comment)}>
                      <ThumbsUp className="w-3 h-3" />
                      <span className="ml-1 text-xs">{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onEditComment(comment)}>
                      <Edit2 className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onDeleteComment(comment)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
