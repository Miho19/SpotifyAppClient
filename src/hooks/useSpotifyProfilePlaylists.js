import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { spotifyUserPlaylistsGetList } from "../utilities/spotifyUtilities";

export default function useSpotifyProfilePlaylists() {
  const { isAuthenticated } = useAuth0();

  const spotifyPlaylistQuery = useQuery({
    queryKey: ["spotify", "playlists", "me"],
    queryFn: spotifyUserPlaylistsGetList,
    enabled: isAuthenticated,
  });

  return spotifyPlaylistQuery;
}
