import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import { gsap } from "gsap";

const ProjectDetails = () => {
  const { id } = useParams();
  const containerRef = useRef();
  const numbersRef = useRef([]);

  const project = projectData.find((p) => p.id === id);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }
      );
    }

    // 🔥 count animation for highlights
    numbersRef.current.forEach((el) => {
      if (!el) return;

      const value = el.getAttribute("data-value");
      const num = parseInt(value);

      if (!isNaN(num)) {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: num,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerText: 1 },
          }
        );
      }
    });
  }, []);

  if (!project) {
    return <div className="text-white p-10 text-center">Project not found</div>;
  }

  return (
    <div className="text-white min-h-screen px-6 py-20 mt-5 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div
        ref={containerRef}
        className="grid md:grid-cols-2 gap-10 items-center mb-12"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                className="bg-white text-black px-5 py-2 rounded-lg hover:scale-105 transition"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-lg hover:scale-105 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl shadow-lg border border-white/10"
          />
        </div>
      </div>

      {/* 🔥 HIGHLIGHTS (ANIMATED)
      {project.highlights && (
        <div className="flex flex-wrap gap-10 mb-12">
          {project.highlights.map((h, i) => (
            <div key={i}>
              <p
                ref={(el) => (numbersRef.current[i] = el)}
                data-value={parseInt(h.value)}
                className="text-3xl font-bold text-purple-400"
              >
                0
              </p>
              <p className="text-sm text-gray-400">{h.label}</p>
            </div>
          ))}
        </div>
      )} */}

<div className="grid md:grid-cols-3 gap-8 mb-12">
  <div>
    <h2 className="text-lg mb-4 text-purple-400">Key Features</h2>
    <ul className="space-y-3 text-gray-300">
      {project.features?.map((f, i) => (
        <li key={i} className="flex gap-2">
          <span>•</span> {f}
        </li>
      ))}
    </ul>
  </div>

  {/* CHALLENGES */}
  <div>
    <h2 className="text-lg mb-4 text-pink-400">Challenges</h2>
    <ul className="space-y-3 text-gray-300">
      {project.challenges?.map((c, i) => (
        <li key={i} className="flex gap-2">
          <span>•</span> {c}
        </li>
      ))}
    </ul>
  </div>
  <div>
    <h2 className="text-lg mb-4 text-blue-400">Future Improvements</h2>
    <ul className="space-y-3 text-gray-300">
      {project.improvements?.map((im, i) => (
        <li key={i} className="flex gap-2">
          <span>•</span> {im}
        </li>
      ))}
    </ul>
  </div>

</div>
      {project.images && (
        <div className="mb-12">
          <h2 className="text-xl mb-4">Screenshots</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-lg hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;