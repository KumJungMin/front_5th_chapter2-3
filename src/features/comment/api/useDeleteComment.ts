import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteComment } from "@/entities/comment/api/deleteComment"

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteComment(id),
    onSuccess: (_data, { postId }) => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] })
    },
  })
}
