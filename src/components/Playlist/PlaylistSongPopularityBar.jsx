import React from "react";

export default function PlaylistSongPopularityBar({ songPopularity }) {
  return (
    <div className="text-whtie flex h-full w-36 flex-col justify-center ">
      <div className="h-2 w-full border border-white bg-white">
        <div
          className={`h-full bg-red-400`}
          style={{ width: `${songPopularity}%` }}
        ></div>
        <p className="mt-1 text-center text-xs text-gray-500">Popularity</p>
      </div>
    </div>
  );
}
