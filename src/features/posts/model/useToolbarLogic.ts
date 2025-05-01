import { useEffect } from "react"

import { useTagsQuery } from "@/features/tags/api/useTagsQuery"
import { useQueryNavigate } from "@/shared/model/useQueryNavigate"

import { usePostTableStore } from "./usePostTableStore"
import { usePostsData } from "./usePostsData"
import type { Option } from "@/shared/ui/SelectBox"

export const useToolbarLogic = () => {
  const { tags } = useTagsQuery()
  const { updateURL } = useQueryNavigate()
  const { searchPosts, filterPosts } = usePostsData()
  const { skip, limit, search, tag, sortBy, sortOrder, set: setFilter } = usePostTableStore()

  const tagOptions: Option[] = [{ label: "모든 태그", value: "all" }].concat(
    tags?.map((tag) => ({ label: tag.slug, value: tag.slug })),
  )

  useEffect(() => {
    updateURL({
      skip,
      limit,
      search,
      tag,
      sortBy,
      sortOrder,
    })
    filterPosts()
  }, [skip, limit, sortBy, sortOrder, tag, search])

  const handleSearchChange = (value: string) => {
    setFilter({ search: value })
  }

  const handleTagChange = (value: string) => {
    setFilter({ tag: value })
  }

  const handleSortByChange = (value: string) => {
    setFilter({ sortBy: value })
  }

  const handleSortOrderChange = (value: string) => {
    setFilter({ sortOrder: value })
  }

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return

    searchPosts()
    // triggerSearch()
  }

  return {
    search,
    tag,
    sortBy,
    sortOrder,
    tagOptions,
    handleSearchChange,
    handleTagChange,
    handleSortByChange,
    handleSortOrderChange,
    handleSearchSubmit,
  }
}
