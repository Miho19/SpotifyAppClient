import SideBarButton from "../SideBarButton";
import SidebarContainer from "../SidebarContainer";

export default function Navbar() {
  return (
    <SidebarContainer>
      <SideBarButton buttonText="Home" />
      <SideBarButton buttonText="Party Playlists" />
    </SidebarContainer>
  );
}
