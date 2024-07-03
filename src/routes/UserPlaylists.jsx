import React from "react";
import { useParams } from "react-router-dom";
import useSpotifyPlaylist from "../hooks/useSpotifyPlaylist";
import PlaylistHeader from "../components/Playlist/PlaylistHeader";
import Loader from "react-js-loader";
import PlaylistSongsContainer from "../components/Playlist/PlaylistSongsContainer";
export default function UserPlaylists() {
  const { playlistID } = useParams();
  const spotifyPlaylistQuery = useSpotifyPlaylist(playlistID);

  if (spotifyPlaylistQuery.isLoading) {
    return (
      <section className="h-full w-full bg-[#0f0f0f]">
        <Loader type="bubble-top" bgColor="white" size={10} />
      </section>
    );
  }

  return (
    <section className="h-full w-full space-y-2  p-4">
      <div className="h-full w-full overflow-y-auto rounded-lg bg-gradient-to-l from-[#161616] to-[#171717]">
        <div className="h-1/6 w-full">
          <PlaylistHeader playlistData={spotifyPlaylistQuery.data} />
        </div>
        <div className="h-5/6 w-full ">
          <PlaylistSongsContainer playlistData={spotifyPlaylistQuery.data} />
        </div>
      </div>
    </section>
  );
}
