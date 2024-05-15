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
    <li className="h-16 w-full">
      <img src={image?.url} alt={`${name} playlist image`} />
      <h2>{name}</h2>
      <h4>{owner}</h4>
    </li>
  );
}
