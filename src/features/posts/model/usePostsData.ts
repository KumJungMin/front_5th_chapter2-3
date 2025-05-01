import { useState, useEffect } from "react"
import { usePostsQuery } from "@/features/posts/api/usePostsQuery"
import { useSearchPostsQuery } from "@/features/posts/api/useSearchPosts"
import { usePostTableStore } from "@/features/posts/model/usePostTableStore"

export const usePostsData = () => {
  const { skip, limit, search, sortBy, sortOrder, tag } = usePostTableStore()
  const { data: searchData, isLoading: isLoadingSearch, refetch: searchPosts } = useSearchPostsQuery(search)

  const [searchActive, setSearchActive] = useState(false)

  const hasSearch = search.trim().length > 0

  useEffect(() => {
    if (hasSearch) {
      setSearchActive(true)
    }
  }, [search])

  useEffect(() => {
    setSearchActive(false)
  }, [skip, limit, tag, sortBy, sortOrder])

  const {
    posts: defaultPosts,
    total: defaultTotal,
    isLoading: isLoadingDefault,
  } = usePostsQuery({ skip, limit, tag, sortBy, sortOrder })

  const posts = searchActive && searchData ? searchData.posts : defaultPosts
  const total = searchActive && searchData ? searchData.total : defaultTotal
  const isLoading = searchActive ? isLoadingSearch : isLoadingDefault

  return {
    posts,
    total,
    isLoading,
    searchPosts,
  }
}
