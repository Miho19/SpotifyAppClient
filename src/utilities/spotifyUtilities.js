function spotifyGenerateOptionsHeader(method) {
  return {
    mode: "cors",
    method: method ?? "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
}

async function spotifyUserDetailsGetFromServer(auth0UserID) {
  if (!auth0UserID) return new Promise.reject();

  const options = spotifyGenerateOptionsHeader("POST");
  options.body = JSON.stringify({ auth0ID: auth0UserID });

  const response = await fetch("http://localhost:3000/auth0", options);

  const body = await response.json();

  return body;
}

async function spotifyUserGetProfilePlaylists() {
  const options = spotifyGenerateOptionsHeader("GET");

  const response = await fetch(
    "http://localhost:3000/spotify/users/me/playlists",
    options,
  );

  if (!response.ok) throw new Error("Failed to retrieve playlists");

  const body = await response.json();
  return body;
}

async function spotifyGetPlaylist(playlistID) {
  const options = spotifyGenerateOptionsHeader("GET");

  const response = await fetch(
    `http://localhost:3000/spotify/users/me/playlists/${playlistID}`,
    options,
  );

  const body = await response.json();
  return body;
}

export {
  spotifyUserDetailsGetFromServer,
  spotifyUserGetProfilePlaylists,
  spotifyGetPlaylist,
};
