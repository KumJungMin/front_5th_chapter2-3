import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import type { User } from "@/entities/user/model/types"
import { UserProfile } from "@/entities/user/ui/UserProfile"

interface Props {
  open: boolean
  onOpenChange: (v: boolean) => void
  user?: User
}
export const UserDialog = ({ open, onOpenChange, user }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>사용자 정보</DialogTitle>
      </DialogHeader>
      <UserProfile user={user} />
    </DialogContent>
  </Dialog>
)
