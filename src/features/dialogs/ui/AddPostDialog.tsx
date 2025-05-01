import { Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea, Button } from "@/shared/ui"
import { useState } from "react"

interface AddPostDialogProps {
  open: boolean
  onOpenChange: (v: boolean) => void
  onSubmit: (data: { title: string; body: string; userId: number }) => void
}

export const AddPostDialog = (props: AddPostDialogProps) => {
  const { open, onOpenChange, onSubmit } = props

  const [userId, setUserId] = useState(1)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = () => {
    if (!title || !body) alert("제목과 내용을 입력해주세요.")
    else if (!userId) alert("사용자 ID를 입력해주세요.")
    else {
      onSubmit({ title, body, userId })
      setTitle("")
      setBody("")
      setUserId(1)
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea rows={30} placeholder="내용" value={body} onChange={(e) => setBody(e.target.value)} />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
          />
          <Button onClick={handleSubmit} aria-label="게시물 추가">
            게시물 추가
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
