import { render, screen, waitFor } from "@testing-library/react";
import {
  describe,
  expect,
  test,
  vi,
  afterEach,
  beforeAll,
  afterAll,
} from "vitest";
import App from "../App";
import { testReturnObject } from "./useAuth0MockReturn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { spotifyProfile } from "./spotifyTestUtilities";

import { worker } from "../msw/workers";

const queryClient = new QueryClient();

vi.mock("@auth0/auth0-react");

describe("User Profile", () => {
  beforeAll(() => worker.listen());
  afterAll(() => worker.close());

  afterEach(() => {
    vi.restoreAllMocks();
    worker.restoreHandlers();
  });

  test("User profile nav rendered", async () => {
    const auth0 = await import("@auth0/auth0-react");
    auth0.useAuth0 = vi.fn().mockReturnValue({
      ...testReturnObject,
      isAuthenticated: true,
      isLoading: false,
    });

    const rendered = render(
      <QueryClientProvider client={queryClient}>
        <App />
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
