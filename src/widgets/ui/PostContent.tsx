import { useEffect } from "react"
import { CardContent } from "@/shared/ui"

import { usePostTableStore } from "@/features/posts/model/usePostTableStore"
import { usePostStore } from "@/features/posts/model/usePostStore"
import { useQueryNavigate } from "@/shared/model/useQueryNavigate"

import { Toolbar } from "@/features/posts/ui/Toolbar"
import { PostTable } from "@/features/posts/ui/PostTable"
import { Pagination } from "@/features/posts/ui/Pagination"

import { useDialogStore } from "@/features/dialogs/model/useDialogStore"
import { usePostsQuery } from "@/features/posts/api/usePostsQuery"
import { useTagsQuery } from "@/features/tags/api/useTagsQuery"

export function PostContent() {
  const { skip, limit, set: setTable } = usePostTableStore()
  const { posts, total, isLoading } = usePostsQuery({ skip, limit, tag: "" })
  const { tags } = useTagsQuery()
  const { setPosts, setSelectedPost } = usePostStore()

  const dialogStore = useDialogStore()
  const { updateURL } = useQueryNavigate()

  useEffect(() => {
    if (!isLoading) setPosts(posts)
  }, [isLoading])

  const handleSkip = (v: number) => {
    setTable({ skip: v })
    updateURL({ skip: v, limit })
  }
  const handleLimit = (v: number) => {
    setTable({ limit: v })
    updateURL({ skip, limit: v })
  }

  const handleOpenDetail = (post) => {
    setSelectedPost(post)
    dialogStore.toggle("postDetail", true)
  }
  const handleOpenEdit = (post) => {
    setSelectedPost(post)
    dialogStore.toggle("editPost", true)
  }

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
