import useSpotifyProfile from "../../../hooks/useSpotifyProfile";

export default function UserProfilePicture() {
  const spotifyProfile = useSpotifyProfile();

  return (
    <img
      src={spotifyProfile?.data?.image?.url}
      alt={`${spotifyProfile?.data?.displayName} profile picture`}
      className="max-h-10 min-h-10 min-w-10 max-w-10 cursor-pointer overflow-hidden rounded-full border-white border-opacity-30  duration-100 hover:border"
    />
  );
}
