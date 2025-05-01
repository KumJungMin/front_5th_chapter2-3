// features/dialogs/ui/updateCommentDialog.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, Textarea, Button } from "@/shared/ui"
import { useState, useEffect } from "react"
import type { Comment } from "@/entities/comment/model/types"

interface EditCommentDialogProps {
  open: boolean
  comment: Comment
  onOpenChange: (v: boolean) => void
  onSubmit: (c: Comment) => void
}
export const EditCommentDialog = (props: EditCommentDialogProps) => {
  const { open, comment, onOpenChange, onSubmit } = props
  const [body, setBody] = useState("")

  useEffect(() => {
    setBody(comment?.body || "")
  }, [comment])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <Textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} />
        <Button onClick={() => onSubmit({ ...comment, body })}>댓글 업데이트</Button>
      </DialogContent>
    </Dialog>
  )
}
