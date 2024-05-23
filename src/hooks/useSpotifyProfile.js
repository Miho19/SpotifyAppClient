import { useQuery } from "@tanstack/react-query";
import { spotifyUserDetailsGetFromServer } from "../utilities/spotifyUtilities";
import { useAuth0 } from "@auth0/auth0-react";

export default function useSpotifyProfile() {
  const { user, isAuthenticated } = useAuth0();

  const spotifyProfileQuery = useQuery({
    queryKey: ["spotifyProfile", "me"],
    queryFn: () => spotifyUserDetailsGetFromServer(user?.sub),
    enabled: isAuthenticated,
    staleTime: 15 * 60 * 1000,
  });

  return spotifyProfileQuery;
}
