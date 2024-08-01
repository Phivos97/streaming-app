import Notifications from "./Notifications"
import UserAccount from "./UserAccount"

const UserMenu = () => {
  return (
    <div className="flex gap-10 justify-end">
          <Notifications/>
          <UserAccount/>
    </div>
  )
}

export default UserMenu