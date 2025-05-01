import { usePostTableStore } from "./usePostTableStore"
import { useDialogStore } from "@/features/dialogs/model/useDialogStore"
import { useQueryNavigate } from "@/shared/model/useQueryNavigate"
import { usePostsQuery } from "../api/usePostsQuery"
import { useDeletePost } from "@/features/posts/api/useDeletePost"
import { usePostStore } from "@/features/posts/model/usePostStore"

export const usePostTableLogic = () => {
  const { skip, limit, tag: selectedTag, sortBy, sortOrder, search, set: setFilter } = usePostTableStore()
  const { posts, deletePost: removeFromStore, setSelectedPost } = usePostStore()
  const { toggle } = useDialogStore()

  const { updateURL } = useQueryNavigate()

  const { isLoading } = usePostsQuery({ skip, limit, tag: selectedTag })
  const { mutate: deletePostMutate } = useDeletePost()

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

  return {
    search,
    posts,
    isLoading,
    selectedTag,

    handleTagClick,
    handleOpenDetail,
    handleOpenEdit,
    handleDeletePost,
  }
}
