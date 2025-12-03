import { useRef } from "react";

export default function Education({ darkMode }) {
  const scrollRef = useRef(null);

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      institute: "University of Moratuwa",
      period: "2020 – 2025",
    },
    {
      degree: "GCE Advanced Level - Physical Science Scheme",
      institute: "B/Little Flower Convent \nBandarawela",
      period: "2016 – 2019",
    },
    {
      degree: "GCE Ordinary Level - Bilingual",
      institute: "B/Little Flower Convent \nBandarawela",
      period: "2011 – 2015",
    },
  ];

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
    },
    {
      name: "Python for Everybody",
      issuer: "Coursera",
      year: "2022",
    },
    {
      name: "Front-End Development Libraries",
      issuer: "freeCodeCamp",
      year: "2024",
    },
  ];

  // Scroll Functions
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <section
      id="education"
      className={`py-20 px-6 pt-32 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          Education & Certifications
        </h2>

        {/* ============================
            📘 EDUCATION SECTION
        ============================= */}
        <h3 className="text-2xl font-semibold mb-6">Education</h3>

        <div className="flex flex-col gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-md text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_#38BDF8] ${
                darkMode
                  ? "bg-gray-800 border border-white/10"
                  : "bg-white border border-gray-300/40"
              }`}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>

              <p
                className={`mt-1 whitespace-pre-line ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {edu.institute}
              </p>

              <p
                className={`mt-1 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        {/* ============================
    🏅 CERTIFICATIONS SECTION
============================= */}
        <h3 className="text-2xl font-semibold mt-14 mb-6">Certifications</h3>

        <div className="relative py-4">
          {/* LEFT ARROW — Hidden at start */}
          <button
            id="leftArrow"
            onClick={scrollLeft}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 text-4xl font-bold 
      opacity-0 pointer-events-none transition-opacity duration-300
      ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            ‹
          </button>

          {/* HORIZONTAL SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-4"
            onScroll={() => {
              const leftArrow = document.getElementById("leftArrow");
              if (scrollRef.current.scrollLeft > 10) {
                leftArrow.style.opacity = "1";
                leftArrow.style.pointerEvents = "auto";
              } else {
                leftArrow.style.opacity = "0";
                leftArrow.style.pointerEvents = "none";
              }
            }}
          >
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`min-w-[250px] p-6 rounded-2xl shadow-md transition-all duration-300
          hover:-translate-y-2 hover:shadow-[0_0_15px_#38BDF8]
          ${
            darkMode
              ? "bg-gray-800 border border-white/10"
              : "bg-white border border-gray-300/40"
          }`}
              >
                <h4 className="text-lg font-semibold">{cert.name}</h4>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mt-1`}
                >
                  {cert.issuer}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {cert.year}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW — Always visible */}
          <button
            onClick={scrollRight}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 text-4xl font-bold
      ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
