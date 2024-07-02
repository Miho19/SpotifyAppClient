import React from "react";
import PlaylistSong from "./PlaylistSong";

export default function PlaylistSongsContainer({ playlistData }) {
  if (!playlistData) return <div className="h-full w-full px-1">Loading</div>;

  const tracks = playlistData?.tracks?.items?.map((song, index) => (
    <PlaylistSong key={song?.track?.id} songData={song} order={index + 1} />
  ));

  return <div className="h-full w-full px-1">{tracks}</div>;
}
