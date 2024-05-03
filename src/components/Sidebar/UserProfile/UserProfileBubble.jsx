import { useEffect, useState } from "react";
import SideBarButton from "../SideBarButton";
import UserProfilePicture from "./UserProfilePicture";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { spotifyUserDetailsGetFromServer } from "../../../utilities/spotifyUtilities";

export default function UserProfileBubble() {
  const { user, logout, isAuthenticated } = useAuth0();
  const [spotifyUser, setSpotifyUser] = useState({});

  useEffect(() => {
    if (!isAuthenticated) return;
    async function fetchUserDetails() {
      const response = await spotifyUserDetailsGetFromServer(user);
      setSpotifyUser({ ...response });
    }
    fetchUserDetails();
  }, [spotifyUser, isAuthenticated, user]);

  return (
    <section className="flex h-full w-full flex-row items-center">
      <UserProfilePicture />
      <SideBarButton buttonText={`${spotifyUser?.name}`} />

      <button
        aria-label="logout button"
        className="ml-auto  text-gray-400 duration-500 hover:cursor-pointer hover:text-white"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        <CiLogout className="h-8 w-8" />
      </button>
    </section>
  );
}
