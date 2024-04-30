import { useAuth0 } from "@auth0/auth0-react";
export default function UserProfilePicture() {
  const { user } = useAuth0();

  return (
    <section data-testid={`profilePicture`} className="mr-3">
      <img
        src={user.picture}
        alt={`${user.nickname} profile picture`}
        className="h-10 w-10 rounded-full border-solid border-black"
      />
    </section>
  );
}
