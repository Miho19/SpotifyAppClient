import useSpotifyProfilePlaylists from "../../../hooks/useSpotifyProfilePlaylists";
import SideBarButton from "../SideBarButton";
import SidebarContainer from "../SidebarContainer";
import UserPlaylistsListItem from "./UserPlaylistsListItem";

export default function UserPlaylists() {
  const spotifyPlaylistQuery = useSpotifyProfilePlaylists();

  if (spotifyPlaylistQuery.isLoading)
    return (
      <SidebarContainer>
        <p data-testid="User Playlist">Loading...</p>
      </SidebarContainer>
    );

  const userPlaylists = spotifyPlaylistQuery.data?.items?.map((playlist) => (
    <UserPlaylistsListItem key={playlist.id} {...playlist} />
  ));
  return (
    <SidebarContainer>
      <section data-testid="User Playlist">
        <ul>{userPlaylists}</ul>
      </section>
    </SidebarContainer>
  );
}
