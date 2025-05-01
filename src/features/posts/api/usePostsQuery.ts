import { useQueries } from "@tanstack/react-query"

import { fetchPosts, fetchPostsByTag } from "@/entities/post/api"
import { fetchUsers } from "@/entities/user/api/fetchUsers"

import { Post } from "@/entities/post/model/types"
import { User } from "@/entities/user/model/types"

interface Params {
  skip: number
  limit: number
  tag?: string
}

export const usePostsQuery = ({ skip, limit, tag }: Params) => {
  const [postResponse, userResponse] = useQueries({
    queries: [
      {
        queryKey: ["posts", { skip, limit, tag }],
        queryFn: () => {
          if (tag)
            return fetchPostsByTag(tag) // !! 여기 체크!
          else return fetchPosts({ skip, limit })
        },
      },
      { queryKey: ["users"], queryFn: fetchUsers },
    ],
  })

  const posts: (Post & { author?: User })[] =
    postResponse.data?.posts.map((post) => ({
      ...post,
      author: userResponse.data?.find((user) => user.id === post.userId),
    })) ?? []

  return {
    posts,
    total: postResponse.data?.total ?? 0,
    isLoading: postResponse.isLoading || userResponse.isLoading,
    isError: postResponse.isError || userResponse.isError,
  }
}
