import { create } from "zustand"

export type SortKey = "id" | "title" | "reactions" | "none"

interface State {
  skip: number
  limit: number
  tag: string
  search: string
  sortBy: SortKey
  sortOrder: "asc" | "desc"
  set: (s: Partial<State>) => void
}

export const usePostTableStore = create<State>((set) => ({
  skip: 0,
  limit: 10,
  tag: "",
  search: "",
  sortBy: "none",
  sortOrder: "asc",
  set: (value) => set(value),
}))
