import { http, HttpResponse } from "msw";
import { spotifyProfile } from "../__test__/spotifyTestUtilities";

export const handlers = [
  http.post("http://localhost:3000/auth0", () => {
    return HttpResponse.json({ ...spotifyProfile }, { status: 200 });
  }),
];

export function unhandledRequests(request, print) {
  const unhandledRequestURLArray = [
    "/node_modules/.vite/deps/WIIHGP5G-UHLE4O5R.js?v=0f016a09",
    "https://dev-t10i14pvkktezprz.us.auth0.com/oauth/token",
    "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
  ];

  if (unhandledRequestURLArray.includes(request.url)) return;

  print.warning();
}
