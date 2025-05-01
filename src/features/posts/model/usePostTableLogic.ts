import { useEffect, useState } from "react"

import { usePostTableStore } from "./usePostTableStore"
import { useDialogStore } from "@/features/dialogs/model/useDialogStore"
import { usePostsData } from "@/features/posts/model/usePostsData"
import { useDeletePost } from "@/features/posts/api/useDeletePost"
import { usePostStore } from "@/features/posts/model/usePostStore"
import { useUserStore } from "@/features/user/model/useUserStore"
import { useUserQuery } from "@/features/user/api/useUserQuery"
import { useCommentsQuery } from "@/features/comment/api/useCommentsQuery"
import { useCommentStore } from "@/features/comment/model/useCommentStore"

export const usePostTableLogic = () => {
  const { tag: selectedTag, search, set: setFilter } = usePostTableStore()

  const { posts, setSelectedPost, selectedPost, setPosts, deletePost: removeFromStore } = usePostStore()
  const { setComments } = useCommentStore()
  const { setSelectedUser } = useUserStore()

  const [userId, setUserId] = useState<string | null>(null)

  const { data: user } = useUserQuery(userId)
  const { data: comments } = useCommentsQuery(selectedPost?.id)

  const { posts: fetchedPosts, isLoading } = usePostsData()
  const { mutate: deletePostMutate } = useDeletePost()
  const { toggle } = useDialogStore()

  useEffect(() => {
    if (!isLoading) setPosts(fetchedPosts)
  }, [isLoading])

  useEffect(() => {
    if (comments?.comments && selectedPost?.id) {
      setComments(selectedPost.id, comments.comments)
    }
  }, [comments, selectedPost?.id])

  useEffect(() => {
    if (user) {
      setSelectedUser(user)
      toggle("userDetail", true)
    }
  }, [user])

  const handleTagClick = (tag: string) => {
    setFilter({ tag })
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
