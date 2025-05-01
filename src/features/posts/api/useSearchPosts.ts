import { useQuery } from "@tanstack/react-query"
import { searchPosts } from "@/entities/post/api"

export const useSearchPostsQuery = (keyword: string) => {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: () => searchPosts(keyword),
    enabled: false,
    gcTime: 0,
  })
}
