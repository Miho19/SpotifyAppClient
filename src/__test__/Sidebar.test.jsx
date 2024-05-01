import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi, afterEach, beforeEach } from "vitest";
import App from "../App";
import UserProfileBubble from "../components/Sidebar/UserProfile/UserProfileBubble";
import { testReturnObject } from "./useAuth0MockReturn";
import userEvent from "@testing-library/user-event";

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
      expect(screen.getByTestId("userProfile")).toBeDefined();
    });
    test("User playlist nav rendered", () => {
      render(<App />);
      expect(screen.getByTestId("userPlaylist")).toBeDefined();
    });
    test("Main nav rendered", () => {
      render(<App />);
      expect(screen.getByTestId("nav")).toBeDefined();
    });
  });

  describe("User profile nav should render profile", () => {
    beforeEach(async () => {
      const auth0 = await import("@auth0/auth0-react");
      auth0.useAuth0 = vi.fn().mockReturnValue({
        ...testReturnObject,
        isAuthenticated: true,
        isLoading: false,
      });
    });

    afterEach(() => vi.restoreAllMocks());

    test("Profile picture should be displayed", () => {
      render(<UserProfileBubble />);
      expect(screen.getByTestId("profilePicture")).toBeTruthy();
    });

    test("User fullname should be displayed", () => {
      render(<UserProfileBubble />);
      expect(screen.getByText(`${testReturnObject.user.name}`)).toBeTruthy();
    });

    test("Logout button should be displayed", () => {
      render(<UserProfileBubble />);
      expect(screen.getByTestId(`logoutButton`)).toBeTruthy();
    });
  });

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
      const logoutButton = screen.getByTestId(`logoutButton`);

      await user.click(logoutButton);
      expect(spy).toHaveBeenCalled();
    });
  });
});
