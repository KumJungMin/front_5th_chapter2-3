import { useQuery } from "@tanstack/react-query"
import { fetchTags } from "@/entities/tag/api/fetchTags"
import type { Tag } from "@/entities/tag/model/types"

export const useTagsQuery = () => {
  const { data = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  })
  return { tags: data as Tag[] }
}
