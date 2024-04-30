import "./App.css";
import Home from "./components/MainContent/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
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
