import { render, screen } from "@testing-library/react";
import { describe, expect, test, afterEach, vi } from "vitest";
import { testReturnObject } from "./useAuth0MockReturn";
import App from "../App";
import { SpotifyContext } from "../context/SpotifyContext";
import { spotifyProfile } from "./spotifyTestUtilities";

vi.mock("@auth0/auth0-react");

describe("Auth0", () => {
  afterEach(() => vi.restoreAllMocks());

  test("User not authenticated should be displayed login page", async () => {
    const auth0 = await import("@auth0/auth0-react");
    auth0.useAuth0 = vi.fn().mockReturnValue({
      ...testReturnObject,
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <SpotifyContext.Provider value={{ spotifyProfile }}>
        <App />
      </SpotifyContext.Provider>,
    );
    const loginElement = screen.getByText("Login");
    expect(loginElement).toBeTruthy();
  });

  test("Authenticated user should be shown home page", async () => {
    const auth0 = await import("@auth0/auth0-react");
    auth0.useAuth0 = vi.fn().mockReturnValue({
      ...testReturnObject,
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <SpotifyContext.Provider value={{ spotifyProfile }}>
        <App />
      </SpotifyContext.Provider>,
    );
    const HomeSideBarElement = screen.getByText("Home");
    expect(HomeSideBarElement).toBeTruthy();
  });
});
