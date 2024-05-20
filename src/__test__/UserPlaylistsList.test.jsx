import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { serverWorker } from "../msw/server";
import { testReturnObject } from "./useAuth0MockReturn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, waitFor } from "@testing-library/react";
import { spotifyUserPlaylists } from "./spotifyTestUtilities";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../routes/router";

const queryClient = new QueryClient();
vi.mock("@auth0/auth0-react");

describe("User Playlist Sidebar list", () => {
  beforeAll(() => {
    serverWorker.listen();
  });

  afterAll(() => {
    serverWorker.close();
  });

  afterEach(() => {
    serverWorker.resetHandlers();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    const auth0 = await import("@auth0/auth0-react");
    auth0.useAuth0 = vi.fn().mockReturnValue({
      ...testReturnObject,
      isAuthenticated: true,
      isLoading: false,
    });
  });

  test("User Playlist Container has rendered", async () => {
    const router = createMemoryRouter(routes);

    const rendered = render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    await waitFor(() => rendered.getByTestId("User Playlists"));

    const userPlaylistContainer = rendered.getByTestId("User Playlists");
    expect(userPlaylistContainer).toBeTruthy();
  });

  test("A Playlist list item should be rendered", async () => {
    const router = createMemoryRouter(routes);

    const rendered = render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    await waitFor(() => rendered.getByTestId("User Playlists"));

    const userPlaylistContainer = rendered.getByTestId("User Playlists");
    expect(userPlaylistContainer).toBeTruthy();

    const testPlaylist = spotifyUserPlaylists.items[0];

    const projectPangPlaylist = rendered.getByText(testPlaylist.name);

    expect(projectPangPlaylist).toBeTruthy();

    const playlistImage = rendered.getByAltText(
      `${testPlaylist.name} playlist image`,
    );

    expect(playlistImage.src).toBe(testPlaylist.image.url);
    expect(rendered.getByText(testPlaylist.owner)).toBeTruthy();
  });
});
