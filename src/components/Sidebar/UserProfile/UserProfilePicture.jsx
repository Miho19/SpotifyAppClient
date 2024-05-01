import { useAuth0 } from "@auth0/auth0-react";
export default function UserProfilePicture() {
  const { user } = useAuth0();

  return (
    <section className="mr-3">
      <img
        src={user.picture}
        alt={`${user.name} profile picture`}
        className="h-10 w-10 rounded-full border-solid border-black"
      />
    </section>
  );
}
