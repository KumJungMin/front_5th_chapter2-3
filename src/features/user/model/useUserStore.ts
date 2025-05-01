import { create } from "zustand"
import type { User } from "@/entities/user/model/types"

interface UserStore {
  selectedUser: User | null
  setSelectedUser: (user: User) => void
}

export const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}))
