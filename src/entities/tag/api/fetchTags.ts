import { axiosInstance } from "@/shared/lib/axios"

export const fetchTags = async () => {
  const res = await axiosInstance.get("/posts/tags")
  return res.data
}
