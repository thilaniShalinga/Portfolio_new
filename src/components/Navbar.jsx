import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const menuItems = ["About", "Skills", "Education", "Projects", "Contact"];

  // Close menu if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <nav
      className={`fixed w-full top-4 z-50 p-1 
        backdrop-blur-xl transition-all duration-500
        bg-transparent
        ${darkMode ? "text-white" : "text-gray-900"}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center
         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center
           bg-white dark:bg-black"
          >
            <div
              className="text-3xl font-bold select-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{
                fontFamily: "'Brush Script MT', cursive",
                letterSpacing: "4px",
                fontStyle: "italic",
              }}
            >
              SA
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-12 text-2xl font-smooth">
            {menuItems.map((section) => (
              <li
                key={section}
                className={`cursor-pointer transition-all ${
                  darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                <a href={`#${section.toLowerCase()}`}>{section}</a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`relative flex items-center w-14 h-7 cursor-pointer rounded-full 
        shadow-inner transition-all duration-500
        ${darkMode ? "bg-gray-600/40" : "bg-white/40"} backdrop-blur-lg`}
          >
            <div
              className={`absolute flex items-center justify-center w-6 h-6 rounded-full shadow-md 
          transform transition-all duration-500
          ${darkMode ? "translate-x-7 bg-gray-700" : "translate-x-1 bg-white"}`}
            >
              <span
                className={`text-base transition-all duration-500 ${
                  darkMode
                    ? "opacity-0 rotate-180"
                    : "opacity-100 rotate-0 text-yellow-500"
                }`}
              >
                ☀️
              </span>
              <span
                className={`absolute text-base transition-all duration-500 ${
                  darkMode ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              >
                🌙
              </span>
            </div>
          </div>
        </div>
        {/* Mobile Hamburger + Toggle */}
        <div className="md:hidden flex items-center space-x-4" ref={menuRef}>
          {/* Dark Mode Toggle */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`relative flex items-center w-10 h-6 cursor-pointer rounded-full transition-all duration-500 shadow-inner ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <div
              className={`absolute flex items-center justify-center w-5 h-5 rounded-full shadow-md transform transition-all duration-500 ${
                darkMode
                  ? "translate-x-4 bg-gray-700"
                  : "translate-x-1 bg-white"
              }`}
            >
              <span
                className={`text-sm transition-all duration-500 ${
                  darkMode
                    ? "opacity-0 rotate-180"
                    : "opacity-100 rotate-0 text-gray-100"
                }`}
              >
                ☀️
              </span>
              <span
                className={`absolute text-sm transition-all duration-500 ${
                  darkMode
                    ? "opacity-100 rotate-0 text-gray-300"
                    : "opacity-0 -rotate-180"
                }`}
              >
                🌙
              </span>
            </div>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-6 h-6 flex flex-col justify-between items-center focus:outline-none"
          >
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""
              } ${darkMode ? "bg-white" : "bg-gray-900"}`}
            />
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              } ${darkMode ? "bg-white" : "bg-gray-900"}`}
            />
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""
              } ${darkMode ? "bg-white" : "bg-gray-900"}`}
            />
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`absolute top-16 right-4 rounded-lg flex flex-col items-center space-y-4 py-4 px-6 shadow-lg transition-colors ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                }`}
              >
                {menuItems.map((section) => (
                  <li
                    key={section}
                    className={`cursor-pointer transition-colors ${
                      darkMode ? "hover:text-blue-400" : "hover:text-blue-500"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <a href={`#${section.toLowerCase()}`}>{section}</a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
