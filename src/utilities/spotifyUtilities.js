async function spotifyUserDetailsGetFromServer(user) {
  const options = {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auth0ID: user.sub }),
  };

  const response = await fetch("http://localhost:3000/auth0", options);

  const body = await response.json();
  return { name: body.displayName, picture: body.image.url };
}

export { spotifyUserDetailsGetFromServer };
