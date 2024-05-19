import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "../components/Loading/LoadingPage";

export default function Root() {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigator = useNavigate();

  if (isLoading) return <LoadingPage title="Fetching User" />;
  if (!isAuthenticated) {
    navigator("/login");
  }

  return (
    <main className="flex h-[calc(100vh)] w-full bg-[#191414] font-sans">
      <aside className="hidden h-full w-1/4 sm:flex">
        <Sidebar />
      </aside>

      <section className="h-full w-3/4 grow border border-white">
        <Outlet />
      </section>
    </main>
  );
}
