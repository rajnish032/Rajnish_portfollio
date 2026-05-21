import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { FaReact, FaNodeJs, FaJs, FaPython, FaLaravel } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiFastapi,
  SiSqlite,
  SiDjango,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa6";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Laravel", icon: <FaLaravel /> },
  
  { name: "FastApi", icon: <SiFastapi /> },
  { name: "SQL", icon: <SiSqlite /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

const education = [
  {
    year: "2023 — 2027",
    title: "B.Tech Computer Science",
    place: "B.P. Mandal College of Engineering",
  },
  {
    year: "2021 — 2023",
    title: "Higher Secondary",
    place: "Your School",
  },
];

const SkillsEducation = () => {
  return (
    <section className="bg-transparent text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-14 md:mb-24 text-center leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            <Typewriter
              words={["Skills & Education", "My Expertise", "My Journey"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24">

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 md:mb-12 text-purple-400">
              Education
            </h3>

            <div className="relative">

              {/* LINE */}
              <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-indigo-500"></div>

              <div className="space-y-10 sm:space-y-14 md:space-y-16">

                {education.map((edu, i) => (
                  <div key={i} className="relative pl-10 sm:pl-12">

                    {/* DOT */}
                    <div className="absolute left-0 top-1 sm:top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                      {i + 1}
                    </div>

                    {/* YEAR */}
                    <p className="text-xs sm:text-sm text-indigo-400 mb-1">
                      {edu.year}
                    </p>

                    {/* TITLE */}
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {edu.title}
                    </h4>

                    {/* PLACE */}
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      {edu.place}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 md:mb-12 text-purple-400">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-4">

              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full
                  bg-white/5 border border-white/10
                  hover:border-purple-500 hover:bg-white/10
                  transition"
                >
                  <span className="text-purple-400 text-sm sm:text-base">
                    {skill.icon}
                  </span>

                  <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;