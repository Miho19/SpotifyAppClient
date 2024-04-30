import SideBarButton from "../SideBarButton";
import SidebarContainer from "../SidebarContainer";

export default function Navbar() {
  return (
    <SidebarContainer dataTestID="nav">
      <SideBarButton buttonText="Home" />
      <SideBarButton buttonText="Party Playlists" />
    </SidebarContainer>
  );
}
