import SideBarButton from "../SideBarButton";
import UserProfilePicture from "./UserProfilePicture";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import useSpotifyProfile from "../../../hooks/useSpotifyProfile";

export default function UserProfileBubble() {
  const { logout } = useAuth0();

  const spotifyProfile = useSpotifyProfile();

  return (
    <section className="flex h-full w-full flex-row items-center justify-center gap-3 md:justify-start">
      <UserProfilePicture />

      <button className="hidden h-full w-full text-left text-sm font-bold text-gray-400 duration-500 hover:cursor-pointer hover:text-gray-100 md:inline">{`${spotifyProfile?.data?.displayName}`}</button>
    </section>
  );
}
