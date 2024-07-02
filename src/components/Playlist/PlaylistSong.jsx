import React from "react";
import PlaylistSongPopularityBar from "./PlaylistSongPopularityBar";

export default function PlaylistSong({ songData, order }) {
  const { track } = songData;

  const artistString = track?.artists?.map((artist) => artist.name).join(", ");
  <p className="text-xs text-gray-400">{artistString}</p>;

  return (
    <div className="grid h-20 w-full grid-cols-1 items-center gap-4 space-x-7 rounded-lg px-2 transition-all hover:bg-white/20 md:grid-cols-2">
      <div className="flex h-full w-full columns-1 flex-row items-center space-x-4 ">
        <p className="text-sm text-gray-400">{order}</p>
        <img
          src={track.album?.images[0].url}
          alt="album cover art"
          className="h-11 w-11"
        />
        <div className="flex h-full w-full flex-col justify-center pl-1">
          <p className="text-md line-clamp-1  text-white">{track.name}</p>
          <p className="text-xs text-gray-400">{artistString}</p>
        </div>
      </div>

      <PlaylistSongPopularityBar songPopularity={track.popularity} />
    </div>
  );
}
