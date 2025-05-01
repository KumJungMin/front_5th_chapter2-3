import { usePostsQuery } from "@/features/posts/api/usePostsQuery"
import { useSearchPostsQuery } from "@/features/posts/api/useSearchPosts"
import { usePostTableStore } from "@/features/posts/model/usePostTableStore"

export const usePostsData = () => {
  const { skip, limit, search, sortBy, sortOrder, tag } = usePostTableStore()

  const isSearching = search.trim().length > 0

  const { data: searchData, isLoading: isLoadingSearch, refetch: searchPosts } = useSearchPostsQuery(search)

  const {
    posts: defaultPosts,
    total: defaultTotal,
    isLoading: isLoadingDefault,
    refetchAll: filterPosts,
  } = usePostsQuery({ skip, limit, tag, sortBy, sortOrder })

  const posts = isSearching && searchData ? searchData.posts : defaultPosts
  const total = isSearching && searchData ? searchData.total : defaultTotal
  const isLoading = isSearching ? isLoadingSearch : isLoadingDefault

  return {
    posts,
    total,
    isLoading,
    searchPosts,
    filterPosts,
  }
}
