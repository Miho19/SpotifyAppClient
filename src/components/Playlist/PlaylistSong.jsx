import React from "react";

export default function PlaylistSong({ songData, order }) {
  console.log(songData);

  const artistString = songData.artist.map((artist) => artist.name).join(",");

  return (
    <div className="flex h-20 w-full flex-row items-center space-x-4 rounded-lg border border-white px-2 transition-all hover:bg-white/20">
      <p className="text-sm text-gray-400">{order}</p>
      <img
        src={songData.album?.image?.url}
        alt="album cover art"
        className="h-11 w-11"
      />
      <div className="flex h-full flex-col justify-center border border-white pl-1">
        <p className="text-md text-white">{songData.name}</p>
        <p className="text-xs text-gray-400">{artistString}</p>
      </div>
    </div>
  );
}
