import React from "react";
import Tilt from "react-parallax-tilt";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiGithub,
  SiCplusplus,
  SiDotnet,
  SiMui,
  SiBootstrap,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  const leftColumn = [
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaJava color="#f89820" />, name: "Java" },
        { icon: <FaPython color="#3776AB" />, name: "Python" },
        { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
        { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
        { icon: <SiCplusplus color="#004482" />, name: "C++" },
        { icon: <SiDotnet color="#512BD4" />, name: ".NET" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { icon: <FaNodeJs color="#83CD29" />, name: "Node.js" },
        {
          icon: <SiExpress color={darkMode ? "#FFFFFF" : "#000000"} />,
          name: "Express.js",
        },
        { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
        { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
        { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
      ],
    },
  ];

  const rightColumn = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <FaReact color="#61DBFB" />, name: "React" },
        { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
        { icon: <FaCss3Alt color="#264DE4" />, name: "CSS" },
        { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
        { icon: <SiMui color="#007FFF" />, name: "Material-UI" },
        { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          icon: <SiGithub color={darkMode ? "#FFFFFF" : "#000000"} />,
          name: "GitHub",
        },
        { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
      ],
    },
  ];

  return (
    <section
      className={`py-16 pt-32 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className={`text-4xl font-bold mb-10 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftColumn.map((category, idx) => (
              <CategoryCard
                key={idx}
                title={category.title}
                skills={category.skills}
                darkMode={darkMode}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightColumn.map((category, idx) => (
              <CategoryCard
                key={idx}
                title={category.title}
                skills={category.skills}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

/* -------------------- Category Card Component -------------------- */
const CategoryCard = ({ title, skills, darkMode }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.03}
      transitionSpeed={100}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="cursor-pointer"
    >
      <div
        className={`${
          darkMode
            ? "bg-gray-800/70 border-gray-700"
            : "bg-white/70 border-gray-300"
        } border rounded-2xl p-6 shadow-lg hover:shadow-[0_0_5px_#38BDF8] hover:scale-105 transition-transform duration-300`}
      >
        <h3
          className={`text-2xl font-semibold mb-6 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.05}
              transitionSpeed={250}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              className="cursor-pointer"
            >
              <div
                className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl shadow-md hover:scale-110 transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-900/80 hover:shadow-[0_0_15px_#38BDF8]"
                    : "bg-gray-100/80 hover:shadow-[0_0_15px_#38BDF8]"
                }`}
              >
                <div className="text-3xl mb-1">{skill.icon}</div>
                <p
                  className={`text-xs text-center ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </Tilt>
  );
};
