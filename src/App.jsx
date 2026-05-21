import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import ProjectDetails from "./pages/ ProjectDetails";
import ThreeBackground from "./components/ThreeBackground";
import About from "./pages/about";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import Anime from "./pages/Anime";
import Others from "./pages/Other";
import Projects from "./components/Projects";

function App() {
  return (
    <>
     <ThreeBackground />
      
     <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies/movies" element={<Movies />} />
          <Route path="/hobbies/anime" element={<Anime />} />
          <Route path="/hobbies/others" element={<Others />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
