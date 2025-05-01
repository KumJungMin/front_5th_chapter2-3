import type { User } from "@/entities/user/model/types"
import { axiosInstance } from "@/shared/lib/axios"

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axiosInstance.get("/users", {
    params: { limit: 0, select: "username,image" },
  })
  return res.data.users
}
