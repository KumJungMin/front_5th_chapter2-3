import type { User } from "@/entities/user/model/types"

export const fetchUser = async (id: User["id"]) => {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
