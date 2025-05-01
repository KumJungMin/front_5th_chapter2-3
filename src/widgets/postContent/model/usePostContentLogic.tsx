import { useEffect } from "react"

import { usePostTableStore } from "@/features/posts/model/usePostTableStore"
import { usePostStore } from "@/features/posts/model/usePostStore"
import { useQueryNavigate } from "@/shared/model/useQueryNavigate"

import { useDialogStore } from "@/features/dialogs/model/useDialogStore"
import { usePostsQuery } from "@/features/posts/api/usePostsQuery"
import { useTagsQuery } from "@/features/tags/api/useTagsQuery"

export const usePostContentLogic = () => {
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
  return {
    skip,
    limit,
    posts,
    total,
    isLoading,
    tags,
    handleSkip,
    handleLimit,
    handleOpenDetail,
    handleOpenEdit,
  }
}
