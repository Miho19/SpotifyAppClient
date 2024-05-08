import useSpotifyProfile from "../../../hooks/useSpotifyProfile";

export default function UserProfilePicture() {
  const spotifyProfile = useSpotifyProfile();

  return (
    <section className="mr-3">
      <img
        src={spotifyProfile?.data?.image?.url}
        alt={`${spotifyProfile?.data?.displayName} profile picture`}
        className="h-10 w-10 rounded-full border-solid border-black"
      />
    </section>
  );
}
