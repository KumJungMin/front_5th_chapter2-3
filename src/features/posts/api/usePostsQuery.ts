import { useQueries } from "@tanstack/react-query"

import { fetchPosts, fetchPostsByTag } from "@/entities/post/api"
import { fetchUsers } from "@/entities/user/api/fetchUsers"

import type { Post } from "@/entities/post/model/types"
import type { User } from "@/entities/user/model/types"

interface Params {
  skip: number
  limit: number
  tag?: string
  sortBy?: string
  sortOrder?: string
}

export const usePostsQuery = ({ skip, limit, tag, sortBy, sortOrder }: Params) => {
  const [postResponse, userResponse] = useQueries({
    queries: [
      {
        queryKey: ["posts", { skip, limit, tag, sortBy, sortOrder }],
        queryFn: () => (tag ? fetchPostsByTag(tag) : fetchPosts({ skip, limit })),
        gcTime: 0,
      },
      {
        queryKey: ["users"],
        queryFn: fetchUsers,
        gcTime: 0,
      },
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
    refetchAll: async () => {
      await Promise.all([postResponse.refetch(), userResponse.refetch()])
    },
  }
}
