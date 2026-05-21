import React from "react";

const CodingStats = () => {
  return (
    <section className="relative bg-transparent text-white px-6 py-20">

      {/* 🌈 background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* 🔥 HEADING */}
      <div className="max-w-6xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
          Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Activity</span>
        </h2>
        <p className="text-gray-400 text-center mt-4 text-lg">
          My coding journey across GitHub and LeetCode.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">

        {/* 🔹 GitHub Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="group p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 hover:from-purple-500 hover:to-blue-500 transition">
            <div className="bg-[#0f0f0f] rounded-2xl p-3 backdrop-blur-xl">
              <img
                src="https://github-readme-stats.vercel.app/api?username=rajnish032&show_icons=true&theme=tokyonight"
                className="w-full rounded-lg group-hover:scale-[1.02] transition"
              />
            </div>
          </div>

          <div className="group p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 hover:from-blue-500 hover:to-purple-500 transition">
            <div className="bg-[#0f0f0f] rounded-2xl p-3 backdrop-blur-xl">
              <img
                src="https://streak-stats.demolab.com?user=rajnish032&theme=tokyonight"
                className="w-full rounded-lg group-hover:scale-[1.02] transition"
              />
            </div>
          </div>

        </div>

        {/* 🔹 Contribution Graph */}
        <div className="group p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 hover:from-purple-500 hover:to-blue-500 transition">
          <div className="bg-[#0f0f0f] rounded-2xl p-5 backdrop-blur-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Contribution Graph
            </h3>
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=rajnish032&theme=tokyo-night"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* 🔹 LeetCode */}
        <div className="group p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400/40 to-orange-500/40 hover:from-yellow-400 hover:to-orange-500 transition">
          <div className="bg-[#0f0f0f] rounded-2xl p-5 backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              LeetCode Progress
            </h3>

            <img
              src="https://leetcard.jacoblin.cool/rajnish032?theme=dark&ext=heatmap"
              className="w-full rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingStats;