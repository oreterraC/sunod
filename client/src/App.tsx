import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr] grid-cols-1 lg:grid-cols-[200px_1fr] min-h-screen">
        <nav className="h-14 bg-gray-900 items-center text-white lg:col-span-2 p-4">
          Navbar
        </nav>
        <aside className="hidden lg:block bg-gray-800 text-white p-4">
          Aside
        </aside>
        <main className="bg-gray-300 p-4">Main</main>
      </div>
    </>
  );
}

export default App;
