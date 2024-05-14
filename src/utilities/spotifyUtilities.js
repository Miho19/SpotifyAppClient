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

  return response.json();
}

async function spotifyUserPlaylistsGetList() {
  const options = {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    "http://localhost:3000/spotify/me/playlists",
    options,
  );
  return await response.json();
}

export { spotifyUserDetailsGetFromServer, spotifyUserPlaylistsGetList };
