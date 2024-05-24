import React from "react";
import { NavLink } from "react-router-dom";

export default function UserPlaylistsListItem({
  id,
  image,
  name,
  owner,
  type,
  link,
}) {
  return (
    <NavLink
      className={
        "flex h-16 w-full list-none flex-row items-center justify-center space-x-2 rounded-lg px-2 hover:cursor-pointer hover:bg-[#272727] md:justify-start"
      }
      to={`/playlist/${id}`}
    >
      <img
        src={image?.url}
        alt={`${name} playlist image`}
        className="h-10 w-10 rounded-md"
      />
      <div className="hidden flex-col space-y-0 md:flex">
        <h2 className="text-sm text-gray-50">{name}</h2>
        <h4 className="text-xs text-white text-opacity-50">{owner}</h4>
      </div>
    </NavLink>
  );
}
