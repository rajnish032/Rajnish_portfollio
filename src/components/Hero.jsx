import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <div className="lg:hidden relative z-20 min-h-screen flex flex-col justify-center px-5 mt-20 py-14">
        <div className="relative mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[70px] rounded-full scale-110" />
          <div
            className="relative w-[290px] h-[390px]
            rounded-[35px] overflow-hidden
            border border-white/10
            bg-white/5 backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
            <img
              src="/rajnishnew.png"
              alt="Rajnish"
              className="w-full h-full object-cover object-top scale-[1.03]"
            />
            <div className="absolute bottom-0 left-0 z-20 p-5">
              <p className="text-xs uppercase tracking-[3px] text-purple-300 mb-2">
                Full Stack Developer
              </p>

              <h2 className="text-3xl font-bold text-white">
                Rajnish Kumar
              </h2>

              <p className="text-gray-300 text-sm mt-1">
                React • Next.js • Node.js
              </p>
            </div>
          </div>

          {/* Experience */}
          <div
            className="absolute -left-3 top-[12%]
            px-4 py-3 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white">
              1.2+
            </h3>

            <p className="text-xs text-purple-300">
              Years
            </p>
          </div>

          {/* Projects */}
          <div
            className="absolute -right-3 bottom-[12%]
            px-4 py-3 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white">
              15+
            </h3>

            <p className="text-xs text-blue-300">
              Projects
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <div
            className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-white/5 border border-white/10
            backdrop-blur-xl"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-gray-300">
              Available For Work
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-2px]">
            Crafting
            <br />

            <span
              className="bg-gradient-to-r
              from-purple-400 via-pink-400 to-blue-400
              bg-clip-text text-transparent"
            >
              Digital
            </span>

            <br />
            Experiences
          </h1>

          {/* Role */}
          <div className="mt-5 text-lg text-gray-300 font-medium">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>
          <p className="mt-6 text-gray-400 leading-relaxed text-[15px]">
            Building scalable and visually engaging web applications
            with React, Next.js, Node.js, and MongoDB focused on
            performance and seamless user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-8">

            <a href="#contact" className="w-full">
    <button
      className="w-full py-4 rounded-2xl
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
      text-white font-medium shadow-xl
      hover:scale-[1.02] transition duration-300"
    >
      Let’s Talk ↗
    </button>
  </a>

  {/* Resume Button */}
  <a
    href="https://drive.google.com/file/d/1FBndMZZkcaO6brxI82ydfGPjPTcmzMPQ/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <button
      className="w-full py-4 rounded-2xl
      bg-gradient-to-r from-blue-500 via-orange-500 to-green-500
      text-white font-medium shadow-xl
      hover:scale-[1.02] transition duration-300"
    >
      Resume ↗
    </button>
  </a>


            
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-8">

            <a
              href="#"
              className="w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div
        className="hidden lg:grid relative z-20
        max-w-7xl mx-auto min-h-screen
        grid-cols-2 items-center gap-16
        px-6 lg:px-10 py-20"
      >

        {/* LEFT */}
        <div className="relative z-20 flex flex-col mt-5 justify-center">

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-7xl xl:text-[95px] font-black leading-[0.9] tracking-[-4px]">
              Crafting
            </h1>

            <h1
              className="text-7xl xl:text-[95px]
              font-black leading-[0.9]
              bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
              bg-clip-text text-transparent tracking-[-4px]"
            >
              Digital
            </h1>

            <h1 className="text-7xl xl:text-[95px] font-black leading-[0.9] tracking-[-4px]">
              Experiences
            </h1>
          </div>

          {/* Role */}
          <div className="mt-8 text-2xl text-gray-300 font-medium">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Backend Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p
            className="mt-8 max-w-xl text-lg xl:text-xl
            leading-relaxed text-gray-400"
          >
            I build scalable and visually stunning web applications
            with React, Next.js, Node.js, and MongoDB — focused on
            smooth user experiences, clean interfaces, and
            high-performance digital products.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-10">

            <div
              className="px-6 py-5 rounded-3xl
              bg-white/5 border border-white/10
              backdrop-blur-xl min-w-[160px]"
            >
              <h2 className="text-4xl font-bold text-white">
                15+
              </h2>

              <p className="text-gray-400 mt-1">
                Projects Built
              </p>
            </div>

            <div
              className="px-6 py-5 rounded-3xl
              bg-white/5 border border-white/10
              backdrop-blur-xl min-w-[160px]"
            >
              <h2 className="text-4xl font-bold text-white">
                1.2+
              </h2>

              <p className="text-gray-400 mt-1">
                Years Experience
              </p>
            </div>

            <div
              className="px-6 py-5 rounded-3xl
              bg-white/5 border border-white/10
              backdrop-blur-xl min-w-[160px]"
            >
              <h2 className="text-4xl font-bold text-white">
                MERN
              </h2>

              <p className="text-gray-400 mt-1">
                Tech Stack
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-5 mt-10">

            <a href="#contact">
  <button
    className="group px-8 py-4 rounded-2xl
    bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500
    text-white font-medium text-lg
    hover:scale-105 transition duration-300
    shadow-[0_15px_60px_rgba(168,85,247,0.45)]"
  >
    <span className="flex items-center gap-3">
      Let’s Talk

      <span className="group-hover:translate-x-1 transition">
        ↗
      </span>
    </span>
  </button>
</a>

            <a
  href="https://drive.google.com/file/d/1FBndMZZkcaO6brxI82ydfGPjPTcmzMPQ/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 rounded-2xl
  bg-gradient-to-r from-purple-500 via-green-500 to-red-500
  text-white font-medium text-lg
  hover:scale-105 transition duration-300
  shadow-[0_15px_60px_rgba(168,85,247,0.45)]
  inline-flex items-center gap-3"
>
  Resume

  <span className="group-hover:translate-x-1 transition">
    ↗
  </span>
</a>


          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 mt-10">

            <a
              href="#"
              className="w-14 h-14 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              hover:scale-110 hover:bg-gradient-to-r
              hover:from-purple-500 hover:to-blue-500
              transition duration-300"
            >
              <FaXTwitter className="text-lg" />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              hover:scale-110 hover:bg-gradient-to-r
              hover:from-pink-500 hover:to-purple-500
              transition duration-300"
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              hover:scale-110 hover:bg-gradient-to-r
              hover:from-red-500 hover:to-pink-500
              transition duration-300"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center lg:justify-end h-full">

          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[120px]" />

          {/* Image Card */}
          <div
            className="relative w-[380px] xl:w-[430px]
            h-[540px] xl:h-[620px]
            rounded-[40px] overflow-hidden
            border border-white/10
            bg-white/5 backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
          >

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

            {/* Image */}
            <img
              src="/rajnishnew.png"
              alt="Rajnish"
              className="w-full h-full object-cover object-top scale-[1.05]"
            />

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full z-20 p-6">
              <p className="text-sm uppercase tracking-[4px] text-purple-300 mb-2">
                Full Stack Developer
              </p>

              <h2 className="text-3xl font-bold text-white">
                Rajnish Kumar
              </h2>

              <p className="text-gray-300 mt-2 text-sm">
                React • Next.js • Node.js • MongoDB
              </p>
            </div>
          </div>

          {/* Experience */}
          <div
            className="absolute top-[12%] -left-4
            backdrop-blur-xl bg-white/10
            border border-white/10
            px-5 py-4 rounded-2xl shadow-2xl"
          >
            <p className="text-sm text-gray-300">
              Experience
            </p>

            <h3 className="text-3xl font-bold text-white">
              1.2+
            </h3>

            <p className="text-sm text-purple-300">
              Years
            </p>
          </div>

          {/* Projects */}
          <div
            className="absolute bottom-[12%] -right-4
            backdrop-blur-xl bg-white/10
            border border-white/10
            px-5 py-4 rounded-2xl shadow-2xl"
          >
            <p className="text-sm text-gray-300">
              Projects
            </p>

            <h3 className="text-3xl font-bold text-white">
              15+
            </h3>

            <p className="text-sm text-blue-300">
              Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;