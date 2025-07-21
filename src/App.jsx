import About from "./components/about";
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
    </div>
  )
}

export default App;
