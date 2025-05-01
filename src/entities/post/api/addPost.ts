import type { Post } from "@/entities/post/model/types"
import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_PATH

export const addPost = async (newPost: Post): Promise<{ post: Post }> => {
  const res = await axios.post(`${API_BASE_URL}/api/posts/add`, newPost, {
    headers: { "Content-Type": "application/json" },
  })
  return res.data
}
