import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  )
}

export default App;
