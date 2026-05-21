import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";
import * as THREE from "three";

// 🔥 ICONS
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const containerRef = useRef();
  const canvasRef = useRef();

  // 🔥 GSAP Animations
  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fadeUp"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  // 🔥 THREE BACKGROUND
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 1500; i++) {
      vertices.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 0.015,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* 🌌 THREE CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
      />

      {/* MAIN */}
      <div
        ref={containerRef}
        className="relative z-10 px-6 py-20 max-w-6xl mx-auto"
      >
        {/* 🔥 HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
          
          {/* LEFT */}
          <div className="fadeUp">
            <h1 className="text-5xl font-bold mb-4">
              👋 Rajnish Kumar
            </h1>

            {/* TYPEWRITER */}
            <p className="text-purple-400 text-lg mb-6">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Engineer",
                  "Next.js Specialist",
                  "Building Scalable Apps 🚀",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
              />
            </p>

            <p className="text-gray-400 leading-relaxed mb-3">
              I design and build scalable web applications with modern tech.
              I care about performance, clean architecture, and creating
              products that actually solve real problems.
            </p>

            {/* 🔥 SOCIAL ICONS */}
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/rajnish032"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 hover:scale-125 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rajnishkuma/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-125 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com/rajnish032"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 hover:scale-125 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://leetcode.com/rajnish032"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 hover:scale-125 transition"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
<div className="fadeUp flex justify-center mt-20">
  <div className="relative group">
    <img
      src="/rajnish.jpg"
      alt="profile"
      className="w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-white/10 shadow-2xl transform group-hover:scale-105 transition duration-500"
    />

    {/* glow */}
    <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-25 group-hover:opacity-50 transition" />
  </div>
</div>
        </div>

        {/* 🔥 STATS */}
        <div className="fadeUp flex flex-wrap gap-12 mb-10">
          {[
            { value: "15+", label: "Projects" },
            { value: "2+", label: "Years Learning" },
            { value: "3+", label: "Internships" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-purple-400">
                {item.value}
              </p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🔥 WHAT I DO */}
        <div className="fadeUp mb-6">
          <h2 className="text-2xl mb-3 text-purple-400 font-semibold">
            What I Do
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I build full-stack applications using Node.js, Express,
            React/Next.js, and MongoDB. From authentication systems to
            scalable APIs and clean UI — I handle everything end-to-end.
          </p>
        </div>


        {/* 🔥 DIFFERENT */}
        <div className="fadeUp mb-8">
          <h2 className="text-2xl mb-5 text-blue-400 font-semibold">
            What Makes Me Different
          </h2>

          <div className="space-y-3 text-gray-300">
            <p>• I build real-world production systems</p>
            <p>• Strong backend + clean frontend balance</p>
            <p>• Focus on performance & scalability</p>
            <p>• Learning mindset + execution focused</p>
          </div>
        </div>

        {/* 🔥 CURRENT */}
        <div className="fadeUp">
          <h2 className="text-2xl mb-4 text-green-400 font-semibold">
            Currently
          </h2>

          <p className="text-gray-300">
            Working on full-stack apps, improving system design skills,
            and building projects that stand out globally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;