import { http, HttpResponse } from "msw";
import { spotifyProfile } from "../../src/__test__/spotifyTestUtilities";

export const handlers = [
  http.get("http:localhost:3000/auth0", () => {
    return HttpResponse.json({ ...spotifyProfile });
  }),
];
