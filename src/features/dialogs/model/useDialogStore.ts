import { create } from "zustand"

type Keys = "addPost" | "editPost" | "addComment" | "editComment" | "postDetail" | "userDetail"
type State = Record<Keys, boolean> & {
  toggle: (key: Keys, value?: boolean) => void
}

export const useDialogStore = create<State>((set) => ({
  addPost: false,
  editPost: false,
  addComment: false,
  editComment: false,
  postDetail: false,
  userDetail: false,
  toggle: (key, value) => set((state) => ({ ...state, [key]: value ?? !state[key] })),
}))
