import { useContext, useEffect, useState } from "react";
import SideBarButton from "../SideBarButton";
import UserProfilePicture from "./UserProfilePicture";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { SpotifyContext } from "../../../context/SpotifyContext";

export default function UserProfileBubble() {
  const { user, logout, isAuthenticated } = useAuth0();
  const { spotifyProfile } = useContext(SpotifyContext);

  return (
    <section className="flex h-full w-full flex-row items-center">
      <UserProfilePicture />
      <SideBarButton buttonText={`${spotifyProfile?.name}`} />

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
