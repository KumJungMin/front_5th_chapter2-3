import { useMutation, useQueryClient } from "@tanstack/react-query"
import { likeComment } from "@/entities/comment/api/likeComment"

export const useLikeComment = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, currentLikes }: { id: number; currentLikes: number }) => likeComment({ id, currentLikes }),
    onSuccess: (updated) => {
      qc.invalidateQueries({ queryKey: ["comments", updated.postId] })
    },
  })
}
