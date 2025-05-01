import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComment } from "@/entities/comment/api/updateComment"

export const useUpdateComment = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: updateComment,
    onSuccess: (updated) => {
      qc.invalidateQueries({ queryKey: ["comments", updated.postId] })
    },
  })
}
