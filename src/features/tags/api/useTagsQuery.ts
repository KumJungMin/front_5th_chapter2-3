import { useQuery } from "@tanstack/react-query"
import { fetchTags } from "@/entities/tag/api/fetchTags"

export const useTagsQuery = () => {
  const { data = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  })
  return { tags: data }
}
