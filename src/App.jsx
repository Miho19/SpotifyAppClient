import { useEffect } from "react";
import "./App.css";
import LoadingPage from "./components/Loading/LoadingPage";
import Login from "./components/Login/Login";
import Home from "./components/MainContent/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

import { useAuth0 } from "@auth0/auth0-react";
import { useSpotify } from "./hooks/spotify/useSpotify";

//
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <LoadingPage title="Fetching User" />;

  if (!isAuthenticated) return <Login />;

  console.log(user);

  return (
    <main className="flex h-[calc(100vh)] w-full bg-black" data-testid="">
      <Sidebar />
      <section className="h-full w-3/4 grow">
        <Home />
      </section>
    </main>
  );
}

export default App;
