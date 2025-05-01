import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost } from "@/entities/post/api"
import { Post } from "@/entities/post/model/types"

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: Post) => deletePost(post.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })
}
