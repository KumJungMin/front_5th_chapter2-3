import { Plus } from "lucide-react"
import { Card, CardHeader, CardTitle, Button } from "@/shared/ui"

import { DialogContainer } from "@/widgets/dialogContainer/ui/DialogContainer"
import { PostContent } from "@/widgets/postContent/ui/PostContent"

import { useDialogStore } from "@/features/dialogs/model/useDialogStore"

export default function PostsManagerPage() {
  const dialogStore = useDialogStore()
  return (
    <Card className="max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between">
          게시물 관리자
          <Button size="sm" onClick={() => dialogStore.toggle("addPost")}>
            <Plus className="w-4 h-4 mr-1" />
            게시물 추가
          </Button>
        </CardTitle>
      </CardHeader>

      <PostContent />
      <DialogContainer />
    </Card>
  )
}
