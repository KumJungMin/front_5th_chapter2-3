import { useQuery } from "@tanstack/react-query"
import { searchPosts } from "@/entities/post/api"

export const useSearchPostsQuery = (keyword: string) => {
  const { data = [], refetch } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => searchPosts(keyword),
    enabled: !!keyword.trim(),
  })

  return { posts: data, refetch }
}
