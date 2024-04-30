import SideBarButton from "../SideBarButton";
import UserProfilePicture from "./UserProfilePicture";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfileBubble() {
  const { user } = useAuth0();
  return (
    <section className="flex h-full w-full flex-row items-center">
      <UserProfilePicture />
      <SideBarButton buttonText={`${user.name}`} />
    </section>
  );
}
