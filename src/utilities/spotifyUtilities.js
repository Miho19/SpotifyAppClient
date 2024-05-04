async function spotifyUserDetailsGetFromServer(auth0UserID) {
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
  return { name: body.displayName, picture: body.image.url };
}

export { spotifyUserDetailsGetFromServer };
