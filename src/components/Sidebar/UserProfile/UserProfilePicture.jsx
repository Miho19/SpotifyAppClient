import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { SpotifyContext } from "../../../context/SpotifyContext";

export default function UserProfilePicture() {
  const { user } = useAuth0();

  const { spotifyProfile } = useContext(SpotifyContext);

  return (
    <section className="mr-3">
      <img
        src={spotifyProfile?.picture}
        alt={`${spotifyProfile?.name} profile picture`}
        className="h-10 w-10 rounded-full border-solid border-black"
      />
    </section>
  );
}
