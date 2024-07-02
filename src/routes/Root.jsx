import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "../components/Loading/LoadingPage";
import { useEffect } from "react";

export default function Root() {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigator = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigator("/login");
      }
    }
  }, [isLoading]);

  //if (isLoading) return <LoadingPage title="Fetching User" />;

  return (
    <main className="flex h-[100vh] w-full overflow-hidden bg-black font-sans">
      <aside className="m-w-20 flex h-full md:w-1/4">
        <Sidebar />
      </aside>

      <section className="h-full w-3/4">
        <Outlet />
      </section>
    </main>
  );
}
