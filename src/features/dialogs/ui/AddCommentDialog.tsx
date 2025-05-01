import { useState } from "react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui"

interface AddCommentDialogProps {
  open: boolean
  postId?: number
  onOpenChange: (open: boolean) => void
  onSubmit: (comment: { body: string; postId: number; userId: number }) => void
}

export const AddCommentDialog = (props: AddCommentDialogProps) => {
  const { onOpenChange, open, postId, onSubmit } = props
  const [content, setContent] = useState("")

  const handleAddComment = () => {
    if (!postId) return

    onSubmit({ body: content, postId, userId: Math.floor(Math.random() * 10) + 1 })
    setContent("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" value={content} onChange={(e) => setContent(e.target.value)} />
          <Button onClick={handleAddComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
