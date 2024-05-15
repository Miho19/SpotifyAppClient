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
  console.log(`json body: `);

  const body = await response.json();

  return body;
}

export { spotifyUserDetailsGetFromServer };
