import SidebarContainer from "../SidebarContainer";
import { RiHome2Line } from "react-icons/ri";
import { RiBeerLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <SidebarContainer>
      <button
        className="flex h-full w-full cursor-pointer items-center justify-start space-x-3 font-bold text-gray-500 duration-700 hover:text-gray-100"
        aria-label="Home Page"
      >
        <RiHome2Line className="h-6 w-6" />
        <p>Home</p>
      </button>
      <button
        className="flex h-full w-full cursor-pointer items-center justify-start space-x-3 font-bold text-gray-500 duration-700 hover:text-gray-100"
        aria-label="Party Playlist"
      >
        <RiBeerLine className="h-6 w-6" />
        <p>Party Playlist</p>
      </button>
    </SidebarContainer>
  );
}
