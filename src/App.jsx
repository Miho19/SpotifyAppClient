import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/MainContent/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="flex h-[calc(100vh)] w-full bg-black">
      <Sidebar />
      <main className="h-full w-3/4 grow">
        <Home />
      </main>
    </div>
  );
}

export default App;
