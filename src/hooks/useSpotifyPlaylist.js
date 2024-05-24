import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { spotifyGetPlaylist } from "../utilities/spotifyUtilities";

export default function useSpotifyPlaylist(playlistID) {
  const { isAuthenticated } = useAuth0();

  const spotifyPlaylistQuery = useQuery({
    queryKey: ["spotifyPlaylist", `${playlistID}`],
    enabled: isAuthenticated,
    queryFn: () => spotifyGetPlaylist(playlistID),
  });

  return spotifyPlaylistQuery;
}
