import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi, afterEach, beforeEach } from "vitest";

import App from "../App";

import UserProfileBubble from "../components/Sidebar/UserProfile/UserProfileBubble";

vi.mock("@auth0/auth0-react");

const testUserProfile = {
  email: "joshua28at@hotmail.com",
  name: "Josh April",
  nickname: "joshua28at",
  picture:
    "https://s.gravatar.com/avatar/4ed92118b39f9dc8a7f157bb1a03c4fc?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fja.png",
};

describe("Sidebar", () => {
  describe("Sidebar nav elements should render", () => {
    beforeEach(async () => {
      const auth0 = await import("@auth0/auth0-react");
      auth0.useAuth0 = vi.fn().mockReturnValue({
        isAuthenticated: true,
        isLoading: false,
        user: testUserProfile,
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
        isAuthenticated: true,
        isLoading: false,
        user: testUserProfile,
      });
    });

    afterEach(() => vi.restoreAllMocks());

    test("Profile picture should be displayed", () => {
      render(<UserProfileBubble />);
      expect(screen.getByTestId("profilePicture")).toBeTruthy();
    });

    test("User fullname should be displayed", () => {
      render(<UserProfileBubble />);
      expect(screen.getByText(`${testUserProfile.name}`)).toBeTruthy();
    });
  });
});
