import { http, HttpResponse } from "msw";
import {
  spotifyPlaylist,
  spotifyProfile,
  spotifyUserPlaylists,
} from "../__test__/spotifyTestUtilities";

export const handlers = [
  http.post("http://localhost:3000/auth0", () => {
    return HttpResponse.json({ ...spotifyProfile }, { status: 200 });
  }),
  http.get("http://localhost:3000/spotify/me/playlists", () => {
    return HttpResponse.json({ ...spotifyUserPlaylists }, { status: 200 });
  }),
  http.get("http://localhost:3000/spotify/playlists/*", () => {
    return HttpResponse.json({ ...spotifyPlaylist }, { status: 200 });
  }),
];

export function unhandledRequests(request, print) {
  const unhandledRequestURLArray = [
    "/node_modules/.vite/deps/WIIHGP5G-UHLE4O5R.js?v=0f016a09",
    "https://dev-t10i14pvkktezprz.us.auth0.com/oauth/token",
    "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
    "/node_modules/.vite/deps/WIIHGP5G-UHLE4O5R.js?v=8b9fad27",
    "https://dev-t10i14pvkktezprz.us.auth0.com/oauth/token",
    "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
    "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8429378b414bb63f76f5cd68c2",
    "https://mosaic.scdn.co/640/ab67616d00001e02083975ba2878d4f79329dd97ab67616d00001e022e6cb000abc707be89b5ce7bab67616d00001e026365f4a97a29922f5963e1c6ab67616d00001e02659cd4673230913b3918e0d5",
  ];

  if (unhandledRequestURLArray.includes(request.url)) return;

  console.log(request.url);

  print.warning();
}
