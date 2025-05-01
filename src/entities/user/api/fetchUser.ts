import type { User } from "@/entities/user/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const fetchUser = async (id: User["id"]) => {
  const res = await axiosInstance.get(`/users/${id}`)
  return res.data
}
