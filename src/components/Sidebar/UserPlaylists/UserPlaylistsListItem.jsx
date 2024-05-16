import React from "react";

export default function UserPlaylistsListItem({
  id,
  image,
  name,
  owner,
  type,
  link,
}) {
  return (
    <li className="flex h-16 w-full list-none flex-row items-center space-x-3 rounded-lg px-2 hover:cursor-pointer hover:bg-[#272727]">
      <img
        src={image?.url}
        alt={`${name} playlist image`}
        className="h-10 w-10 rounded-md"
      />
      <div className="flex flex-col space-y-0">
        <h2 className="text-gray-50">{name}</h2>
        <h4 className="text-xs text-white text-opacity-50">{owner}</h4>
      </div>
    </li>
  );
}
