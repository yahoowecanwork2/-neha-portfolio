import About from "./components/about";
import Contact from "./components/Contact";
import Hero from "./components/hero";
import Navbar from "./components/navabar";
import Project from "./components/Projects";
import Skill from "./components/Skills";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  )
}

export default App;
