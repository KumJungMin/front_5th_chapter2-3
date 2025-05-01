import { useSearchPostsQuery } from "@/features/posts/api/useSearchPosts"
import { useTagsQuery } from "@/features/tags/api/useTagsQuery"
import { usePostTableStore } from "./usePostTableStore"
import type { Option } from "@/shared/ui/SelectBox"

export const useToolbarLogic = () => {
  const { tags } = useTagsQuery()
  const { search, tag, sortBy, sortOrder, set: setFilter } = usePostTableStore()

  const { refetch: triggerSearch } = useSearchPostsQuery(search)

  const tagOptions: Option[] = [{ label: "모든 태그", value: "all" }].concat(
    tags?.map((tag) => ({ label: tag.slug, value: tag.slug })),
  )

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

    triggerSearch()
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
