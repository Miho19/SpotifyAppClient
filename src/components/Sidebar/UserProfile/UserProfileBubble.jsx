import UserProfilePicture from "./UserProfilePicture";
import { useAuth0 } from "@auth0/auth0-react";

import useSpotifyProfile from "../../../hooks/useSpotifyProfile";

import Loader from "react-js-loader";

export default function UserProfileBubble() {
  const { isAuthenticated, isLoading, logout } = useAuth0();

  const spotifyProfile = useSpotifyProfile();
  // console.log(
  //   `isAuth: ${isAuthenticated} loading: ${isLoading} spotify: ${spotifyProfile.isLoading}`,
  // );

  if (isLoading && !isAuthenticated) {
    return (
      <div className="h-full w-full">
        <Loader type="bubble-top" bgColor="white" size={10} />
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        logout({
          logoutParams: {
            returnTo: `${import.meta.env.VITE_AUTH0LOGOUTREDIRECT}`,
          },
        });
      }}
      className="group flex h-full w-full flex-row items-center justify-center gap-3 md:justify-start"
    >
      <UserProfilePicture />

      <p className=" hidden w-full  text-left text-sm font-bold text-gray-400 duration-500 group-hover:cursor-pointer group-hover:text-gray-100 md:inline">
        {`${spotifyProfile?.data?.displayName}`}
      </p>
    </button>
  );
}
