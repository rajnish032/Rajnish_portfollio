import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Hobbies",  },
  // { name: "Contact", path: "/contact" },
];

const hobbiesLinks = [
  { name: "Movies", path: "/hobbies/movies" },
  { name: "Anime", path: "/hobbies/anime" },
  { name: "Others", path: "/hobbies/others" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-2 py-1.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between 
      bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-2xl px-6 py-3 shadow-lg relative overflow-visible">

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none 
        bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20 blur-xl"></div>

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-white font-semibold text-lg tracking-wide z-10 cursor-pointer"
        >
          Rajnish
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 z-10">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group cursor-pointer">

              {/* Main Link */}
              <div
                onClick={() => navigate(link.path)}
                className={`transition ${
                  location.pathname === link.path
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {link.name}
              </div>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0"
                }`}
              />

              {/* 🔥 Hobbies Dropdown */}
              {link.name === "Hobbies" && (
                <div
                  className="absolute left-0 top-full pt-3 opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 z-50"
                >
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 
                  rounded-xl p-4 space-y-3 w-44 shadow-2xl">

                    {hobbiesLinks.map((sub) => (
                      <div
                        key={sub.path}
                        onClick={() => navigate(sub.path)}
                        className="hover:text-purple-400 transition cursor-pointer"
                      >
                        {sub.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 
        text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition z-10">
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-white z-10 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 mx-auto max-w-7xl 
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl p-6 text-white space-y-6">

          {navLinks.map((link) => (
            <div key={link.path}>
              <div
                onClick={() => {
                  navigate(link.path);
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-purple-400"
              >
                {link.name}
              </div>

              {/* Mobile Hobbies */}
              {link.name === "Hobbies" && (
                <div className="ml-4 mt-2 space-y-2 text-sm text-gray-400">
                  {hobbiesLinks.map((sub) => (
                    <div
                      key={sub.path}
                      onClick={() => {
                        navigate(sub.path);
                        setOpen(false);
                      }}
                      className="cursor-pointer hover:text-purple-400"
                    >
                      • {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded-full">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;