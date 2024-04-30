import SideBarButton from "../SideBarButton";
import SidebarContainer from "../SidebarContainer";

export default function UserPlaylists() {
  return (
    <SidebarContainer dataTestID="userPlaylist">
      <SideBarButton buttonText="User Playlist" />
    </SidebarContainer>
  );
}
