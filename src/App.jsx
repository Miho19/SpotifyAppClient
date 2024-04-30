import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/MainContent/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenicated, isLoading } = useAuth0();

  if (!isAuthenicated) return <Login />;

  return (
    <div className="w-full h-[calc(100vh)] bg-black flex">
      <Sidebar />
      <main className="w-3/4 h-full grow">
        <Home />
      </main>
    </div>
  );
}

export default App;
