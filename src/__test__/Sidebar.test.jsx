import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import UserPlaylists from "../components/Sidebar/UserPlaylists/UserPlaylists";

describe("Navbar testing", () => {
  describe("Bubbles should render", () => {
    test("User Profile bubble rendered", () => {
      render(<UserPlaylists />);
      expect(screen.getByTestId("userPlaylist")).toBeDefined();
    });
  });
});
