import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  console.log(import.meta.env.VITE_AUTH0DOMAIN);
  return (
    <button
      className="text-slate-950 w-20 h-20 bg-slate-100"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}
