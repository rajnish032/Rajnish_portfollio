import React, { useEffect } from "react";
import { gsap } from "gsap";

const movies = [
  {
    title: "Interstellar",
    subtitle: "Sci-Fi • Space",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif",
  },
  {
    title: "Inception",
    subtitle: "Sci-Fi • Mind Bending",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif",
  },
  {
    title: "The Dark Knight",
    subtitle: "Action • Crime",
    img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/26uf1EUQzKKGcIhJS/giphy.gif",
  },
  {
    title: "Avengers Endgame",
    subtitle: "Superhero • Epic",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3ov9k1J6jahVhiev0Q/giphy.gif",
  },
  {
    title: "Shutter Island",
    subtitle: "Thriller • Mystery",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/xT0GqF6Z7l6R3C7v3a/giphy.gif",
  },
  {
    title: "Your Name",
    subtitle: "Romance • Anime",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  },
  {
    title: "La La Land",
    subtitle: "Romance • Musical",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
  },
  {
    title: "Zindagi Na Milegi Dobara",
    subtitle: "Adventure • Friendship",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
  },
  {
    title: "RRR",
    subtitle: "South • Action",
    img: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/W6dHvprT7oks6BpX5R/giphy.gif",
  },
  {
    title: "KGF Chapter 2",
    subtitle: "South • Mass Action",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/6ILjOfJ1oL7NAc9SQ7/giphy.gif",
  },
  {
    title: "96",
    subtitle: "South • Romance",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/3o6ZsY8Kx4fJ5j7H6M/giphy.gif",
  },
  {
    title: "Baahubali 2",
    subtitle: "Adventure • Epic",
    img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
    gif: "https://media.giphy.com/media/l1IYhd2BEFa1fMSo8/giphy.gif",
  },
];

const Movies = () => {
  useEffect(() => {
    gsap.to(".letter", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
    });

    gsap.fromTo(
      ".movie-card",
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
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-6 overflow-hidden">
        {"Movies I Love".split("").map((char, i) => (
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
        Movies that inspire, entertain & hit emotionally 🎬
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="movie-card relative rounded-2xl overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Poster */}
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-80 object-cover transition duration-500 group-hover:opacity-0"
            />

            {/* Hover GIF */}
            <img
              src={movie.gif}
              alt="preview"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {movie.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;