import Navbar from "./Navbar/Navbar";
import UserProfile from "./UserProfile/UserProfile";
import UserPlaylists from "./UserPlaylists/UserPlaylists";

export default function Sidebar() {
  return (
    <aside className="mr-3 hidden h-full w-1/4 flex-col bg-black px-2 sm:flex">
      <UserProfile />
      <Navbar />
      <UserPlaylists />
    </aside>
  );
}
