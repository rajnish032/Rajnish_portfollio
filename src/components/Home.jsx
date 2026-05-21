import CodingStats from "./CodingStats";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import SkillsEducation from "./SkillsEducation";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Hero />
      <Experience />
      <SkillsEducation />
      <Projects />
      <CodingStats />
      <Contact />
    </div>
  );
}
