import { useEffect, useState } from "react"
import { usePostTableStore } from "./usePostTableStore"
import { useDialogStore } from "@/features/dialogs/model/useDialogStore"
import { useQueryNavigate } from "@/shared/model/useQueryNavigate"
import { usePostsQuery } from "../api/usePostsQuery"
import { useDeletePost } from "@/features/posts/api/useDeletePost"
import { usePostStore } from "@/features/posts/model/usePostStore"
import { useUserStore } from "@/features/user/model/useUserStore"
import { useUserQuery } from "@/features/user/api/useUserQuery"
import { useCommentsQuery } from "@/features/comment/api/useCommentsQuery"
import { useCommentStore } from "@/features/comment/model/useCommentStore"

export const usePostTableLogic = () => {
  const { skip, limit, tag: selectedTag, sortBy, sortOrder, search, set: setFilter } = usePostTableStore()
  const { posts, deletePost: removeFromStore, setSelectedPost, selectedPost, setPosts } = usePostStore()
  const { setComments } = useCommentStore()

  const [userId, setUserId] = useState<string | null>(null)

  const { setSelectedUser } = useUserStore()
  const { data: user } = useUserQuery(userId)
  const { toggle } = useDialogStore()
  const { updateURL } = useQueryNavigate()
  const { isLoading } = usePostsQuery({ skip, limit, tag: selectedTag })
  const { mutate: deletePostMutate } = useDeletePost()
  const { data: comments } = useCommentsQuery(selectedPost?.id)

  useEffect(() => {
    if (user) {
      setSelectedUser(user)
      toggle("userDetail", true)
    }
  }, [user])

  useEffect(() => {
    if (comments?.comments && selectedPost?.id) {
      setComments(selectedPost.id, comments.comments)
    }
  }, [comments, selectedPost?.id])

  const handleTagClick = (tag: string) => {
    setFilter({ tag })
    updateURL({
      skip,
      limit,
      selectedTag: tag,
      sortBy,
      sortOrder,
      searchQuery: search,
    })
  }

  const handleOpenDetail = (post) => {
    setSelectedPost(post)
    toggle("postDetail", true)
  }

  const handleOpenEdit = (post) => {
    setSelectedPost(post)
    toggle("editPost", true)
  }

  const handleDeletePost = (post) => {
    deletePostMutate(post.id)
    removeFromStore(post)
  }

  const handleOpenUser = (user) => {
    setUserId(user.id)
  }

  return {
    search,
    posts,
    isLoading,
    selectedTag,

    handleOpenUser,
    handleTagClick,
    handleOpenDetail,
    handleOpenEdit,
    handleDeletePost,
  }
}
