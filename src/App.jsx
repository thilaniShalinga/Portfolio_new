import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      {/* <div
        className={`
          fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat
          ${darkMode ? "opacity-80" : "opacity-80"}
        `}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      /> */}

      {/* NAVBAR + ALL SECTIONS */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode}/>
      <Education darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode} />

      <footer className="text-center py-6 bg-gray-600 text-white backdrop-blur-md">
        © 2025 Shalinga Athilani — All Rights Reserved
      </footer>
    </div>
  );
}

