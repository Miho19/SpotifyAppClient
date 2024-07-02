import useSpotifyUserPlaylists from "../../../hooks/useSpotifyUserPlaylists";
import SidebarContainer from "../SidebarContainer";
import UserPlaylistsListItem from "./UserPlaylistsListItem";
import Loader from "react-js-loader";

export default function UserPlaylists() {
  const spotifyUserPlaylistQuery = useSpotifyUserPlaylists();

  if (spotifyUserPlaylistQuery.isLoading || !spotifyUserPlaylistQuery.isSuccess)
    return (
      <SidebarContainer>
        <div className="h-full w-full">
          <Loader type="bubble-top" bgColor="white" size={10} />
        </div>
      </SidebarContainer>
    );

  const userPlaylistSidebarList = spotifyUserPlaylistQuery.data.items.map(
    (playlist) => {
      return <UserPlaylistsListItem key={playlist.id} {...playlist} />;
    },
  );

  return (
    <section
      data-testid="User Playlists"
      className="my-2 flex min-h-16 w-full grow flex-col items-start space-y-4 rounded-lg bg-gradient-to-l from-[#161616] to-[#171717] p-3"
    >
      <nav className="h-full w-full space-y-1">{userPlaylistSidebarList}</nav>
    </section>
  );
}
