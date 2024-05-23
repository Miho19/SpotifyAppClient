import useSpotifyUserPlaylists from "../../../hooks/useSpotifyUserPlaylists";
import SidebarContainer from "../SidebarContainer";
import UserPlaylistsListItem from "./UserPlaylistsListItem";

export default function UserPlaylists() {
  const spotifyUserPlaylistQuery = useSpotifyUserPlaylists();

  if (spotifyUserPlaylistQuery.isLoading)
    return <SidebarContainer>Loading...</SidebarContainer>;

  if (!spotifyUserPlaylistQuery.isSuccess)
    return <SidebarContainer>Loading...</SidebarContainer>;

  const userPlaylistSidebarList = spotifyUserPlaylistQuery.data.items.map(
    (playlist) => {
      return <UserPlaylistsListItem key={playlist.id} {...playlist} />;
    },
  );

  return (
    <SidebarContainer>
      <section data-testid="User Playlists" className="h-full w-full">
        <nav className="h-full w-full space-y-1">{userPlaylistSidebarList}</nav>
      </section>
    </SidebarContainer>
  );
}
