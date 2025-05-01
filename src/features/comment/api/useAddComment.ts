import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment } from "@/entities/comment/api/addComment"

export const useAddComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addComment,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] })
    },
  })
}
