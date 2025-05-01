import { useQuery } from "@tanstack/react-query"
import { fetchComments } from "@/entities/comment/api/fetchComments"
import type { Post } from "@/entities/post/model/types"

export const useCommentsQuery = (postId: Post["id"], options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
    enabled: options?.enabled ?? !!postId,
  })
}
