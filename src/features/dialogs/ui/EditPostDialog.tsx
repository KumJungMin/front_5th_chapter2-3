import { Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea, Button } from "@/shared/ui"
import { useState, useEffect } from "react"
import type { Post } from "@/entities/post/model/types"

interface EditPostDialogProps {
  open: boolean
  post: Post
  onOpenChange: (v: boolean) => void
  onSubmit: (p: Post) => void
}

export const EditPostDialog = (props: EditPostDialogProps) => {
  const { open, onOpenChange, post, onSubmit } = props
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea rows={15} value={body} onChange={(e) => setBody(e.target.value)} />
          <Button onClick={() => onSubmit({ ...post, title, body })}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
