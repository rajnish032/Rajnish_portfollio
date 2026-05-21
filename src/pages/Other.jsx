import React, { useEffect } from "react";
import { gsap } from "gsap";

const others = [
  {
    title: "Survival Videos",
    subtitle: "Adventure • Survival",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
  },
  {
    title: "Travel Vlogs",
    subtitle: "Travel • Lifestyle",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
  },
  {
    title: "Nature Videos",
    subtitle: "Wildlife • Earth",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/xT0GqeSlGSRQutY7W0/giphy.gif",
  },
  {
    title: "Tech Videos",
    subtitle: "AI • Innovation",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    title: "Space Documentaries",
    subtitle: "Science • Universe",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
  },
  {
    title: "Startup Stories",
    subtitle: "Business • Motivation",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3o7TKz9bX9Z6a0Y0Le/giphy.gif",
  },
  {
    title: "Mountain Adventures",
    subtitle: "Hiking • Exploration",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
  },
  {
    title: "Ocean Exploration",
    subtitle: "Sea • Discovery",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
];

const Others = () => {
  useEffect(() => {
    gsap.to(".letter", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
    });

    gsap.fromTo(
      ".other-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-6 overflow-hidden">
        {"What I Watch".split("").map((char, i) => (
          <span
            key={i}
            className="letter inline-block opacity-0 translate-y-6"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-center mb-12 text-lg">
        Survival, travel, nature & tech content that keeps me inspired 🌍
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {others.map((item, i) => (
          <div
            key={i}
            className="other-card relative rounded-3xl overflow-hidden group cursor-pointer transition duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(59,130,246,0.35)]"
          >
            {/* Poster */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-20"
            />

            {/* GIF */}
            <img
              src={item.gif}
              alt="preview"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-xl font-bold tracking-wide">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;