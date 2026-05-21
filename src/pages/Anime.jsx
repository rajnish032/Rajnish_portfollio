import React, { useEffect } from "react";
import { gsap } from "gsap";

const anime = [
  {
    title: "Death Note",
    subtitle: "Psychological • Thriller",
    img: "https://static.wikia.nocookie.net/characterprofile/images/a/ad/L%28Death_Note%29.png",
    gif: "https://media.giphy.com/media/8Fen5LSZcHQ5O/giphy.gif",
  },
  {
    title: "Attack on Titan",
    subtitle: "Action • Dark Fantasy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1BVkI4avu3Ag9Hupej6LLo8qyK9boJi2xQ&s",
    gif: "https://media.giphy.com/media/3ohzdR9BDaFTp51opG/giphy.gif",
  },
  {
    title: "Solo Leveling",
    subtitle: "Action • Fantasy",
    img: "https://preview.redd.it/what-would-you-fix-about-solo-leveling-v0-byhgfo82276f1.jpeg?auto=webp&s=a0dd9c7bed2991f4d09500a7f83875dfb935583a",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXFqM3F4NjZxNmRxaWQ5eXl0dWdpczJ1MnQ4dWwyYmFjYTR2eDZoZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1dMNqVx9Kb12EBjFrc/giphy.gif",
  },
  {
    title: "Jujutsu Kaisen",
    subtitle: "Action • Supernatural",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ19Hd-TgAc4GiEir4qYVgtcajESQ5Zql8nQ&s",
    gif: "https://media.giphy.com/media/8kg9uTj0j1uP0/giphy.gif",
  },
  {
    title: "Demon Slayer",
    subtitle: "Action • Emotional",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWay0OHbtZX7HCvz_ZYdPBC5tuP3heWn9Lg&s",
    gif: "https://media.giphy.com/media/26Ff1JfEo2R4X6Yy4/giphy.gif",
  },
];

const Anime = () => {
  useEffect(() => {
    gsap.to(".letter", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
    });

    gsap.fromTo(
      ".anime-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-6 overflow-hidden">
        {"Anime I Watch".split("").map((char, i) => (
          <span
            key={i}
            className="letter inline-block opacity-0 translate-y-6"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      <p className="text-gray-400 text-center mb-12 text-lg">
        Stories that hit different ⚡
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {anime.map((item, i) => (
          <div
            key={i}
            className="anime-card relative rounded-2xl overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Poster */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover transition duration-500 group-hover:opacity-0"
            />

            {/* Hover GIF */}
            <img
              src={item.gif}
              alt="preview"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-lg font-semibold">
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

export default Anime;