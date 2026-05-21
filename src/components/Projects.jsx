import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { projectData } from "../data/projectData";

const Projects = () => {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="text-white py-20 px-6">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-purple-400">
          <Typewriter
            words={["Featured Projects", "My Work 🚀"]}
            loop
            cursor
          />
        </span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <TiltCard
            key={project.id}
            project={project}
            navigate={navigate}
            refCallback={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;



// 💎 CARD
const TiltCard = ({ project, navigate, refCallback }) => {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 12;
    const rotateY = (x - rect.width / 2) / 12;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale: 1.05,
      duration: 0.3,
    });
  };

  const reset = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        refCallback(el);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg"
    >
      {/* IMAGE */}
      <img
        src={project.image}
        className="w-full h-52 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {project.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-purple-600/20 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


// import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import { gsap } from "gsap";

// const projects = [
//   {
//     id: "wanderlust",
//     title: "Wanderlust",
//     desc: "Airbnb-style hotel booking platform with authentication and listings.",
//     image:
//       "https://images.unsplash.com/photo-1501117716987-c8e1ecb2100d?q=80&w=1200",
//     tech: ["React", "Node.js", "MongoDB"],
//   },
//   {
//     id: "gis-system",
//     title: "GIS Registration System",
//     desc: "Multi-step form with authentication, OTP, and dashboard.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
//     tech: ["Next.js", "JWT", "MongoDB"],
//   },
//   {
//     id: "todo-app",
//     title: "Smart Todo App",
//     desc: "Task manager with real-time updates and animations.",
//     image:
//       "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200",
//     tech: ["JavaScript", "CSS"],
//   },
// ];

// const Projects = () => {
//   const navigate = useNavigate();
//   const containerRef = useRef();

//   useEffect(() => {
//     const container = containerRef.current;

//     const totalWidth = container.scrollWidth / 2;

//     const tl = gsap.to(container, {
//       x: `-=${totalWidth}`,
//       duration: 20,
//       ease: "none",
//       repeat: -1,
//     });

//     // pause on hover
//     const pause = () => tl.pause();
//     const resume = () => tl.resume();

//     container.addEventListener("mouseenter", pause);
//     container.addEventListener("mouseleave", resume);

//     return () => {
//       tl.kill();
//       container.removeEventListener("mouseenter", pause);
//       container.removeEventListener("mouseleave", resume);
//     };
//   }, []);

//   return (
//     <section className="bg-[#0f0213] text-white py-10 px-6 overflow-hidden">

//       {/* TITLE */}
//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//         <span className="text-purple-400">
//           <Typewriter
//             words={["Featured Projects", "My Work", "Things I've Built👦🏻"]}
//             loop
//             cursor
//             cursorStyle="|"
//             typeSpeed={80}
//             deleteSpeed={40}
//             delaySpeed={1500}
//           />
//         </span>
//       </h2>

//       {/* LOOP SCROLL */}
//       <div className="overflow-hidden  mx-auto">
//         <div ref={containerRef} className="flex gap-10 w-max">

//           {[...projects, ...projects].map((project, index) => (
//             <TiltCard
//               key={index}
//               project={project}
//               navigate={navigate}
//             />
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// // 🔥 3D TILT CARD
// const TiltCard = ({ project, navigate }) => {
//   const cardRef = useRef();

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = -(y - centerY) / 12;
//     const rotateY = (x - centerX) / 12;

//     gsap.to(cardRef.current, {
//       rotateX,
//       rotateY,
//       scale: 1.06,
//       transformPerspective: 1000,
//       transformOrigin: "center",
//       duration: 0.3,
//       ease: "power2.out",
//     });

//     gsap.to(cardRef.current, {
//       boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(168,85,247,0.4)`,
//       duration: 0.3,
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(cardRef.current, {
//       rotateX: 0,
//       rotateY: 0,
//       scale: 1,
//       boxShadow: "0 0 0 rgba(0,0,0,0)",
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={() => navigate(`/projects/${project.id}`)}
//       className="min-w-[300px] max-w-[300px] cursor-pointer rounded-2xl overflow-hidden
//       bg-white/5 border border-white/10 backdrop-blur-lg
//       transition-transform duration-300 will-change-transform"
//     >

//       {/* IMAGE */}
//       <div className="overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-56 object-cover transition duration-500 hover:scale-110"
//         />
//       </div>

//       {/* TEXT */}
//       <div className="p-4 flex flex-col gap-3">
//         <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition">
//           {project.title}
//         </h3>

//         <p className="text-gray-400 text-sm">
//           {project.desc}
//         </p>

//         <div className="flex flex-wrap gap-2">
//           {project.tech.map((t, i) => (
//             <span
//               key={i}
//               className="text-xs bg-purple-600/20 px-3 py-1 rounded-full"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };