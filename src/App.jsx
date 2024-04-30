import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-[calc(100vh)] bg-black flex">
      <Navbar />
      <main className="w-3/4 h-full grow">
        <Home />
      </main>
    </div>
  );
}

export default App;
