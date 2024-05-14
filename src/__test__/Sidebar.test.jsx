import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi, afterEach, beforeEach } from "vitest";
import App from "../App";
import UserProfileBubble from "../components/Sidebar/UserProfile/UserProfileBubble";
import { testReturnObject } from "./useAuth0MockReturn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { spotifyProfile } from "./spotifyTestUtilities";

const queryClient = new QueryClient();

vi.mock("@auth0/auth0-react");

describe("User Profile", () => {
  afterEach(() => vi.restoreAllMocks());

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

    console.log(profilePicture.src);

    expect(usernameButton).toBeDefined();
  });
});
