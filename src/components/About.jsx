import React from "react";
import Tilt from "react-parallax-tilt";
import myImage from "../assets/aaaaaaaa.jpg"; // Replace with your image path

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center py-32 px-8 pt-32 gap-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Image */}
      <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
        <img
          src={myImage}
          alt="My Portrait"
          className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Interactive Card */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.25}
        scale={1.05}
        transitionSpeed={300}
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        className="w-full max-w-2xl cursor-pointer"
      >
        <div
          className={`p-12 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_#38BDF8] ${
            darkMode
              ? "bg-gray-800 text-white border border-white/20"
              : "bg-white/80 text-gray-900 border border-gray-300/30"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="leading-relaxed text-base md:text-lg">
            I am a passionate Software Engineer and Full Stack Developer with
            experience in AI, data-driven systems, and modern web technologies.
            I enjoy building intelligent, meaningful applications using
            innovative technologies. I also have experience in frontend and
            backend development, creating responsive and interactive web
            applications.
          </p>
        </div>
      </Tilt>
    </section>
  );
}
