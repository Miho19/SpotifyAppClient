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
            className="flex h-5 w-2 items-end overflow-hidden rounded-sm bg-gray-700"
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
          <div key={index} className="h-5 w-2 rounded-sm bg-gray-400"></div>
        );
      }

      return <div key={index} className="h-5 w-2 rounded-sm bg-gray-700"></div>;
    },
  );

  return (
    <div className="text-whtie hidden h-full w-36 items-center justify-start space-x-1 md:flex">
      {popularityBars}
      <div className="hidden group-hover:flex"></div>
    </div>
  );
}
