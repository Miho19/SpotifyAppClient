import Navbar from "./Navbar/Navbar";
import UserProfile from "./UserProfile/UserProfile";
import UserPlaylists from "./UserPlaylists/UserPlaylists";

export default function Sidebar() {
  return (
    <nav className="flex h-full w-full flex-col bg-black px-2 py-2">
      <UserProfile />
      <Navbar />
      <UserPlaylists />
    </nav>
  );
}
