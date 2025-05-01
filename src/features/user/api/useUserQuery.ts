import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "@/entities/user/api/fetchUser"
import type { User } from "@/entities/user/model/types"

export const useUserQuery = (id: User["id"], options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    enabled: options?.enabled ?? !!id,
  })
}
