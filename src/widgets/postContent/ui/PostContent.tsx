import { CardContent } from "@/shared/ui"

import { Toolbar } from "@/features/posts/ui/Toolbar"
import { PostTable } from "@/features/posts/ui/PostTable"
import { Pagination } from "@/features/posts/ui/Pagination"

import { usePostContentLogic } from "../model/usePostContentLogic"

export function PostContent() {
  const { skip, limit, posts, total, isLoading, tags, handleSkip, handleLimit, handleOpenDetail, handleOpenEdit } =
    usePostContentLogic()

  return (
    <CardContent className="space-y-4">
      <Toolbar tags={tags} />
      {isLoading ? (
        <p className="p-4 text-center">로딩 중…</p>
      ) : (
        <PostTable posts={posts} onOpenDetail={handleOpenDetail} onEdit={handleOpenEdit} />
      )}
      <Pagination total={total} skip={skip} limit={limit} onSkip={handleSkip} onLimit={handleLimit} />
    </CardContent>
  )
}
