import React from "react";
import { useParams } from "react-router-dom";
import useSpotifyPlaylist from "../hooks/useSpotifyPlaylist";
import PlaylistHeader from "../components/Playlist/PlaylistHeader";

export default function UserPlaylists() {
  const { playlistID } = useParams();
  const spotifyPlaylistQuery = useSpotifyPlaylist(playlistID);

  console.log(spotifyPlaylistQuery.data);

  return (
    <section className="h-full w-full bg-[#0f0f0f]">
      <PlaylistHeader playlistData={spotifyPlaylistQuery.data} />
    </section>
  );
}
