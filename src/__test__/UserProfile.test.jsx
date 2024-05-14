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
  afterEach(() => vi.clearAllMocks());
  test("Logout button should be present and clickable", async () => {
    const auth0 = await import("@auth0/auth0-react");
    const logoutSpy = vi.fn();
    auth0.useAuth0.mockReturnValue({
      ...testReturnObject,
      logout: logoutSpy,
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <UserProfileBubble />
      </QueryClientProvider>,
    );

    const logoutButton = screen.getByRole("button", {
      name: "logout button",
    });

    fireEvent.click(logoutButton);
    expect(logoutSpy).toHaveBeenCalled();
  });

  test.skip("User profile should display a username and picture", async () => {
    const rendered = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() => rendered.getByText(`${spotifyProfile.displayName}`));

    const usernameButton = screen.getByText(`${spotifyProfile.displayName}`);
    const profilePicture = screen.getByAltText(
      `${testReturnObject.user.name} profile picture`,
    );

    expect(usernameButton).toBeDefined();
    expect(profilePicture).toBeDefined();
  });
});
