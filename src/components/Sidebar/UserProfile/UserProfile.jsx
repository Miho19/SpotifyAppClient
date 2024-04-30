import SidebarContainer from "../SidebarContainer";
import UserProfileBubble from "./UserProfileBubble";

export default function UserProfile() {
  return (
    <SidebarContainer dataTestID="userProfile">
      <UserProfileBubble />
    </SidebarContainer>
  );
}
