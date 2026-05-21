import React from "react";
import { Typewriter } from "react-simple-typewriter";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Aero2Astro",
    duration: "Feb 2025 – Present",
    desc: "Building scalable full-stack applications using Next.js and Node.js with focus on performance and maintainability.",
    impact: [
      "Designed secure authentication system using JWT and cookies",
      "Developed multi-step GIS registration workflow with validation",
      "Structured backend APIs for better scalability and performance",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
  },
  
  {
    role: "Full Stack Projects",
    company: "Personal Work",
    duration: "2023 – Present",
    desc: "Developed real-world projects focusing on scalability and user experience.",
    impact: [
      "Built Airbnb-style platform (Wanderlust)",
      "Implemented OTP + JWT authentication system",
      "Created dashboards with conditional rendering",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const Experience = () => {
  return (
    <section className="bg-transparent text-white px-6 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
          <span className="text-purple-400">
            <Typewriter
              words={["Experience", "Work & Projects"]}
              loop
              cursor
            />
          </span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col gap-14">

        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold group-hover:text-purple-400 transition">
                  {exp.role}
                </h2>
                <p className="text-gray-400">{exp.company}</p>
              </div>

              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                {exp.duration}
              </p>
            </div>
            <p className="text-gray-300 mb-4">
              {exp.desc}
            </p>
            <ul className="space-y-2 mb-5">
              {exp.impact.map((item, i) => (
                <li key={i} className="text-gray-400 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-600/20 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 h-[1px] bg-white/10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;