import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";
import { spotifyUserDetailsGetFromServer } from "../utilities/spotifyUtilities";

const SpotifyContext = createContext(null);

function SpotifyContextProvider({ children }) {
  const [spotifyProfile, setSpotifyProfile] = useState(null);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchUserDetails() {
      const response = await spotifyUserDetailsGetFromServer(user.sub);
      return response;
    }
    const userProfile = fetchUserDetails();

    userProfile
      .then((response) => setSpotifyProfile({ ...response }))
      .catch((err) => console.log(err));
  }, [user, isAuthenticated]);

  return (
    <SpotifyContext.Provider value={{ spotifyProfile }}>
      {children}
    </SpotifyContext.Provider>
  );
}

export { SpotifyContextProvider, SpotifyContext };
