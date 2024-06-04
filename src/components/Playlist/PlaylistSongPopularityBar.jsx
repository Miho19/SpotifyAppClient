import React from "react";

/**
 *  ParseInt because not using types
 *
 */

export default function PlaylistSongPopularityBar({
  songPopularity,
  maxBars = 5,
}) {
  const parsedSongPopularity = parseInt(songPopularity);
  const parsedMaxBars = parseInt(maxBars);

  const wholeBars = (parsedSongPopularity / 100) * parsedMaxBars;
  const lastBarFilledPercentage = (wholeBars % 1) * 100;

  const popularityBars = Array.apply(null, new Array(parsedMaxBars)).map(
    (_, index) => {
      if (index === parseInt(wholeBars) && lastBarFilledPercentage !== 0) {
        return (
          <div
            key={index}
            className="flex h-5 w-2 items-end overflow-hidden rounded-lg bg-gray-500"
          >
            <div
              className="w-full bg-gray-400"
              style={{ height: `${lastBarFilledPercentage}%` }}
            ></div>
          </div>
        );
      }

      if (index < parseInt(wholeBars)) {
        return (
          <div key={index} className="h-5 w-2 rounded-lg bg-gray-400"></div>
        );
      }

      return <div key={index} className="h-5 w-2 rounded-lg bg-gray-500"></div>;
    },
  );

  return (
    <div className="text-whtie flex h-full w-36 items-center justify-center space-x-1">
      {popularityBars}
    </div>
  );
}
