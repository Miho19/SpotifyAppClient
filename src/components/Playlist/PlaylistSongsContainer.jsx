import React from "react";
import PlaylistSong from "./PlaylistSong";

export default function PlaylistSongsContainer({ playlistData }) {
  const tracks = playlistData.tracks?.items?.map((song, index) => (
    <PlaylistSong key={song.id} songData={song} order={index + 1} />
  ));

  return <div className="h-full w-full px-1">{tracks}</div>;
}
