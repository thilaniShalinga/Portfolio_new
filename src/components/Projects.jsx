import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example project images — replace with your own images
import img1 from "../assets/FYP Poster.png";
import img2 from "../assets/ETAS.png";
import img3 from "../assets/SchoolMS.png";
import img4 from "../assets/ShopyX.png";
import img5 from "../assets/AutomatedRTM.png";

export default function Projects({ darkMode }) {
  const allProjects = [
    {
      title: "AI Personal Trading Advisor",
      description:
        "Hybrid LSTM + FB Prophet model for cryptocurrency price prediction.",
      tech: "Python, LSTM, FB Prophet",
      category: "AI/ML",
      image: img1,
    },
    {
      title: "ETAS Data Feeding System",
      description:
        "Enhanced an Excel-based ETAS system with a user-friendly UI to improve usability and system efficiency.",
      tech: "React, Node.js, MongoDB, Bootstrap",
      category: "Web App",
      image: img2,
    },
    {
      title: "School Management System",
      description:
        "A web platform for managing fees, administration, scheduling, and subject maintenance.",
      tech: "React, Node.js, MongoDB, Bootstrap",
      category: "Web App",
      image: img3,
    },
    {
      title: "E-commerce Website",
      description:
        "A microservices-based shopping website supporting online purchases and bill payments.",
      tech: "React (Vite), Tailwind CSS",
      category: "Web App",
      image: img4,
    },
    {
      title: "Automated Rubber Tapping Machine",
      description:
        "Automated rubber tapping using DC, Servo & Stepper motors with sensors.",
      tech: "C Programming, Microcontroller Programming",
      category: "Hardware/IoT",
      image: img5,
    },
  ];

  const categories = ["All", "Web App", "AI/ML", "Hardware/IoT"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollRef = useRef(null);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    if (direction === "left")
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    if (direction === "right")
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 0);
    }, 200);
  };

  return (
    <section
      id="projects"
      className={`py-20 px-6 pt-32 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Arrowheads */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft
              size={30}
              className={`${darkMode ? "text-white" : "text-gray-900"}`}
            />
          </button>
        )}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight
            size={30}
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          />
        </button>

        {/* Projects Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar px-2"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`min-w-[280px] md:min-w-[320px] lg:min-w-[350px] cursor-pointer transition-all duration-300`}
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-300 p-1 ${
                  darkMode
                    ? "bg-gray-800 border border-white/10 shadow-md hover:shadow-[0_0_30px_#38BDF8]"
                    : "bg-white border border-gray-300/40 shadow-md hover:shadow-[0_0_30px_#38BDF8]"
                }`}
                style={{ maxHeight: "500px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Tech: {project.tech}
                  </p>
                  <p className="mt-2 text-xs inline-block px-2 py-1 bg-blue-500 text-white rounded-full">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide vertical scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
