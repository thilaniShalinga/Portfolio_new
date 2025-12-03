import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Img from '../assets/front_image.png'

// Typing Effect Component
function Typing({ text, speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-32 pt-32 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* ==== RIGHT SIDE BLUR IMAGE ==== */}
      <div className="absolute right-0 top-0 h-full w-[45%] hidden md:block overflow-hidden pointer-events-none">
        <img
          src={Img} // <-- your image path
          alt="Profile"
          className="w-full h-full object-cover opacity-30"
          // opacity controls fading: 20%–40% looks best
        />
      </div>
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Greeting */}
        <motion.h2
          className={`text-5xl md:text-6xl font-bold mb-4 tracking-wide text-left ${
            darkMode ? "text-blue-300" : "text-blue-500"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hello, I'm
        </motion.h2>

        {/* Name */}
        <motion.h1
          className={`text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-left ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Shalinga Athilani
        </motion.h1>

        {/* Typing Effect */}
        <motion.p
          className={`text-2xl md:text-4xl font-medium mb-15 text-left ${
            darkMode ? "text-gray-300" : "text-gray-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Typing text="Full Stack Developer • AI Enthusiast • Graphic Designer" />
        </motion.p>

        {/* Buttons Container */}
        <div className="flex flex-row space-x-4">
          {/* Download CV Button */}
          <motion.a
            href="https://www.freepik.com/your-cv-link"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 text-white hover:opacity-90"
                : "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white hover:opacity-90"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>

          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            className={`px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 text-white hover:opacity-90"
                : "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white hover:opacity-90"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
        <div className="flex space-x-8 mt-8">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125"
          >
            <FaLinkedin
              className={`text-5xl ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            />
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125"
          >
            <FaGithub
              className={`text-5xl ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            />
          </a>

          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125"
          >
            <FaInstagram
              className={`text-5xl ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            />
          </a>

          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125"
          >
            <FaTwitter
              className={`text-5xl ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
