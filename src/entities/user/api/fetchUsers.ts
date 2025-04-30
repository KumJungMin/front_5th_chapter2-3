import type { User } from "@/entities/user/model/type"

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("/api/users?limit=0&select=username,image")
  if (!res.ok) throw new Error("Failed to fetch users")
  const data = await res.json()
  return data.users
}
