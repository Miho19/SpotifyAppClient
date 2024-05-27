const spotifyProfile = {
  displayName: "Joshua April",
  image: {
    url: "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
  },
};

const spotifyUserPlaylists = {
  limit: 30,
  offset: 0,
  next: "",
  previous: "",
  total: 10,
  items: [
    {
      id: "6F9tO7GfRUq3tkIwW3LqOi",
      image: {
        url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8429378b414bb63f76f5cd68c2",
      },
      name: "Project Pang",
      owner: "Aaron Pang",
      type: "playlist",
      link: "https://open.spotify.com/playlist/6F9tO7GfRUq3tkIwW3LqOi",
    },
    {
      id: "5xwUgrmhLWEBHTCOyZl1fw",
      image: {
        url: "https://mosaic.scdn.co/640/ab67616d00001e02083975ba2878d4f79329dd97ab67616d00001e022e6cb000abc707be89b5ce7bab67616d00001e026365f4a97a29922f5963e1c6ab67616d00001e02659cd4673230913b3918e0d5",
      },
      name: "MOVE on",
      owner: "Josh April",
      type: "playlist",
      link: "https://open.spotify.com/user/1253470477",
    },
  ],
};

const spotifyPlaylist = {
  id: "5xwUgrmhLWEBHTCOyZl1fw",
  image: {
    url: "https://mosaic.scdn.co/640/ab67616d00001e02083975ba2878d4f79329dd97ab67616d00001e022e6cb000abc707be89b5ce7bab67616d00001e026365f4a97a29922f5963e1c6ab67616d00001e02659cd4673230913b3918e0d5",
  },
  name: "MOVE on",
  owner: "Josh April",
  type: "playlist",
  link: "https://open.spotify.com/user/1253470477",
  tracks: {
    total: 15,
    next: null,
    previous: null,
    items: [
      {
        popularity: 74,
        id: "42LY6qYxu3L6nJ7Dt72gNy",
        name: "I hope that you think of me",
        album: {
          id: "7adFlPgcQWFfPHcgNgZhUI",
          image: {
            url: "https://i.scdn.co/image/ab67616d0000b2736365f4a97a29922f5963e1c6",
          },
        },
        artist: [{ name: "Pity Party (Girls Club)" }, { name: "Lucys" }],
        durationMS: 128000,
      },
      {
        popularity: 74,
        id: "42LY6qYxu3L6nJ7Dt72gNy",
        name: "I hope that you think of me",
        album: {
          id: "7adFlPgcQWFfPHcgNgZhUI",
          image: {
            url: "https://i.scdn.co/image/ab67616d0000b2736365f4a97a29922f5963e1c6",
          },
          name: "Hard Times / Bad Trips",
        },
        artist: [{ name: "Pity Party (Girls Club)" }, { name: "Lucys" }],
        durationMS: 128000,
      },
    ],
  },
};

export { spotifyProfile, spotifyUserPlaylists, spotifyPlaylist };
