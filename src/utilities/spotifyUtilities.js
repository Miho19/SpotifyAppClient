async function spotifyUserDetailsGetFromServer(auth0UserID) {
  if (!auth0UserID) return new Promise.reject();

  const options = {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auth0ID: auth0UserID }),
  };

  const response = await fetch("http://localhost:3000/auth0", options);

  const body = await response.json();

  return body;
}

async function spotifyUserGetProfilePlaylists() {
  const options = {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    "http://localhost:3000/spotify/me/playlists",
    options,
  );

  const body = await response.json();
  return body;
}

async function spotifyGetPlaylist(playlistID) {
  const options = {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `http://localhost:3000/spotify/playlists/${playlistID}`,
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
