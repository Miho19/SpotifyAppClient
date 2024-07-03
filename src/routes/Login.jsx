import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigator = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigator("/");
    }
  }, []);

  return (
    <main className="flex h-screen w-dvw items-center justify-center bg-gradient-to-l from-[#161616] to-[#171717]">
      <button
        className="h-14 w-60 rounded-full bg-gradient-to-l from-[#525252] to-[#959595] text-2xl font-bold text-white duration-75 hover:bg-zinc-400 hover:opacity-95"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </main>
  );
}
