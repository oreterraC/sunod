import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr] grid-cols-1 lg:grid-cols-[200px_1fr] min-h-screen">
        <NavBar />
        <aside className="hidden lg:block bg-gray-800 text-white p-4"></aside>
        <main className="bg-gray-300 p-4"></main>
      </div>
    </>
  );
}

export default App;
