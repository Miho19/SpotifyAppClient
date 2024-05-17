import { useQuery } from "@tanstack/react-query";
import { spotifyUserGetProfilePlaylists } from "../utilities/spotifyUtilities";
import { useAuth0 } from "@auth0/auth0-react";

export default function useSpotifyUserPlaylists() {
  const { isAuthenticated } = useAuth0();

  const spotifyUserPlaylistQuery = useQuery({
    queryKey: ["spotifyUserPlaylists", "me"],
    queryFn: spotifyUserGetProfilePlaylists,
    enabled: isAuthenticated,
  });

  return spotifyUserPlaylistQuery;
}
