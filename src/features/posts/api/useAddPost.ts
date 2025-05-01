import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPost } from "@/entities/post/api/addPost"
import { Post } from "@/entities/post/model/types"

export const useAddPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: Post) => addPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })
}
