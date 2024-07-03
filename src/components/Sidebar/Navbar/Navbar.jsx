import SidebarContainer from "../SidebarContainer";
import { RiHome2Line } from "react-icons/ri";
import { RiBeerLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <SidebarContainer>
      <NavLink
        className="flex h-full w-full cursor-pointer items-center justify-center space-x-3 text-gray-500 duration-300 hover:text-gray-100 md:justify-start"
        aria-label="Home Page"
        to={"/"}
      >
        <RiHome2Line className="h-6 w-6 " />
        <p className="hidden font-bold  md:inline">Home</p>
      </NavLink>
      <NavLink
        className="flex h-full w-full cursor-pointer items-center justify-center space-x-3 font-bold text-gray-500 duration-300 hover:text-gray-100 md:justify-start"
        aria-label="Party Playlist"
        to={"/party"}
      >
        <RiBeerLine className="h-6 w-6" />
        <p className="md:inlin hidden  font-bold md:inline">Party Playlist</p>
      </NavLink>
    </SidebarContainer>
  );
}
