import Navbar from "./Navbar/Navbar";
import UserProfile from "./UserProfile/UserProfile";
import UserPlaylists from "./UserPlaylists/UserPlaylists";

export default function Sidebar() {
  return (
    <aside className="w-1/4 h-full bg-black hidden sm:flex flex-col mx-3 ">
      <UserProfile />
      <Navbar />
      <UserPlaylists />
    </aside>
  );
}
