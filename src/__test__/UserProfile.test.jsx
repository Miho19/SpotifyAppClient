import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  describe,
  expect,
  test,
  vi,
  afterEach,
  beforeAll,
  afterAll,
} from "vitest";
import { testReturnObject } from "./useAuth0MockReturn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { spotifyProfile } from "./spotifyTestUtilities";

import { serverWorker } from "../msw/server";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../routes/router";

const queryClient = new QueryClient();

vi.mock("@auth0/auth0-react");

describe("User Profile", () => {
  beforeAll(() => serverWorker.listen());
  afterAll(() => serverWorker.close());

  afterEach(() => {
    vi.restoreAllMocks();
    serverWorker.restoreHandlers();
  });

  test("User profile nav rendered", async () => {
    const auth0 = await import("@auth0/auth0-react");
    auth0.useAuth0 = vi.fn().mockReturnValue({
      ...testReturnObject,
      isAuthenticated: true,
      isLoading: false,
    });

    const router = createMemoryRouter(routes);

    const rendered = render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    await waitFor(() => rendered.getByText(`${spotifyProfile.displayName}`));

    const usernameButton = screen.getByText(`${spotifyProfile.displayName}`);
    const profilePicture = screen.getByAltText(
      `${spotifyProfile.displayName} profile picture`,
    );

    expect(usernameButton).toBeDefined();
    expect(profilePicture.src).toBe(spotifyProfile.image.url);
  });
});
