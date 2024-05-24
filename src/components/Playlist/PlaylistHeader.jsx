import React from "react";

export default function PlaylistHeader({ playlistData }) {
  console.log(playlistData);
  return (
    <header className="flex h-36 w-full items-center space-x-4 border border-white bg-gradient-to-b from-gray-600 to-[#0f0f0f] p-4">
      <img
        className="h-24 w-24"
        src={playlistData.image?.url}
        alt="playlist image"
      />
      <h2 className="text-4xl font-bold text-white">{playlistData.name}</h2>
    </header>
  );
}
