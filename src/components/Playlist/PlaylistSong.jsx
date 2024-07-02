import React from "react";
import PlaylistSongPopularityBar from "./PlaylistSongPopularityBar";

export default function PlaylistSong({ songData, order }) {
  const { track } = songData;

  const artistString = track?.artist?.map((artist) => artist.name).join(", ");

  return (
    <div className="flex h-20 w-full flex-row items-center space-x-4 rounded-lg px-2 transition-all hover:bg-white/20">
      <p className="text-sm text-gray-400">{order}</p>
      <img
        src={track.album?.images[0].url}
        alt="album cover art"
        className="h-11 w-11"
      />
      <div className="flex h-full flex-col justify-center  pl-1">
        <p className="text-md text-white">{track.name}</p>
        <p className="text-xs text-gray-400">{artistString}</p>
      </div>
      <PlaylistSongPopularityBar songPopularity={track.popularity} />
    </div>
  );
}
