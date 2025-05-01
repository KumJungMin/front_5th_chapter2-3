import type { Post } from "@/entities/post/model/types"
import { axiosInstance } from "@/shared/lib/axios"

interface FetchPostsParams {
  limit?: number
  skip?: number
}

export const fetchPosts = async ({
  limit = 10,
  skip = 0,
}: FetchPostsParams): Promise<{ posts: Post[]; total: number }> => {
  const res = await axiosInstance.get(`/posts`, {
    params: { limit, skip },
  })
  return res.data
}
