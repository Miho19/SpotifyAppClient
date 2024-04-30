import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  console.log(import.meta.env.VITE_AUTH0DOMAIN);
  return (
    <main className="flex h-screen w-dvw items-center justify-center bg-gradient-to-l from-[#161616] to-[#171717]">
      <button
        className="h-14 w-60 rounded-full bg-gradient-to-l from-[#525252] to-[#959595] text-2xl font-bold text-white duration-75 hover:bg-zinc-400 hover:opacity-95"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </main>
  );
}
