import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="h-18 bg-gray-900 flex justify-between text-white lg:col-span-2 p-4">
      <img src={logo} className="h-10 w-auto" />
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <SunIcon className="h-6 w-auto pr-3" />
        ) : (
          <MoonIcon className="h-6 w-auto pr-3" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
