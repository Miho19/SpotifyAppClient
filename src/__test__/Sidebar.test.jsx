import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi, afterEach, beforeEach } from "vitest";
import App from "../App";
import UserProfileBubble from "../components/Sidebar/UserProfile/UserProfileBubble";
import { testReturnObject } from "./useAuth0MockReturn";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Sidebar/Navbar/Navbar";

vi.mock("@auth0/auth0-react");

describe("Sidebar", () => {
  describe("Sidebar nav elements should render", () => {
    beforeEach(async () => {
      const auth0 = await import("@auth0/auth0-react");
      auth0.useAuth0 = vi.fn().mockReturnValue({
        ...testReturnObject,
        isAuthenticated: true,
        isLoading: false,
      });
    });

    afterEach(() => vi.restoreAllMocks());

    test("User profile nav rendered", () => {
      render(<App />);
      const usernameButton = screen.getByText(`${testReturnObject.user.name}`);
      const profilePicture = screen.getByAltText(
        `${testReturnObject.user.name} profile picture`,
      );

      expect(usernameButton).toBeDefined();
      expect(profilePicture).toBeDefined();
    });

    test("User playlist nav rendered", () => {
      render(<App />);
      expect(screen.getByText("User Playlist")).toBeDefined();
    });

    test("Main nav rendered should display Home button", () => {
      render(<App />);
      expect(screen.getByText("Home")).toBeDefined();
    });
  });

  describe("User Profile", () => {
    describe("User Profile Auth0 interaction", () => {
      afterEach(() => vi.restoreAllMocks());

      test("Logout button should log a user out", async () => {
        const user = userEvent.setup();
        const spy = vi.fn();

        const auth0 = await import("@auth0/auth0-react");

        auth0.useAuth0 = vi.fn().mockReturnValue({
          ...testReturnObject,
          isAuthenticated: true,
          isLoading: false,
          logout: spy,
        });

        render(<UserProfileBubble />);
        const logoutButton = screen.getByRole("button", {
          name: "logout button",
        });

        await user.click(logoutButton);
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe("Navbar", () => {
    beforeEach(async () => {
      const auth0 = await import("@auth0/auth0-react");
      auth0.useAuth0 = vi.fn().mockReturnValue({
        ...testReturnObject,
        isAuthenticated: true,
        isLoading: false,
      });
    });

    afterEach(() => vi.restoreAllMocks());

    test("Navbar should render a home, party playlist button", () => {
      render(<Navbar />);
      const homeButton = screen.getByRole("button", { name: "Home Page" });
      const partyPlaylistButton = screen.getByRole("button", {
        name: "Party Playlist",
      });

      expect(homeButton).toBeTruthy();
      expect(partyPlaylistButton).toBeTruthy();
    });
  });
});
