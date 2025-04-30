import { Dialog } from "@/shared/ui"
import { UserProfile } from "@/entities/user/ui/userProfile"

// features + ui: 주요 행동을 구현하는 컴포넌트
// !! 컴포넌트로 분리할 필요가 있나? 그냥 wiget에서 바로 써도 될 듯 흐음...

export const userModal = (props) => {
  const { showUserModal, setShowUserModal, selectedUser } = props
  return (
    <Dialog open={showUserModal} onOpenChange={setShowUserModal}>
      <UserProfile user={selectedUser} />
    </Dialog>
  )
}
