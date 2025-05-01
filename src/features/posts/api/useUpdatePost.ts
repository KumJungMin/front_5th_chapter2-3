import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePost } from "@/entities/post/api/updatePost"
import { Post } from "@/entities/post/model/types"

export const useUpdatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: Post) => updatePost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })
}
