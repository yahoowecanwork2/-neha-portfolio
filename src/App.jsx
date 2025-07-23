import React from "react";
import { BrowserRouter as Router } from "react-router";
import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/navabar";
import Project from "./components/Projects";
import Service from "./components/Service";
import Skill from "./components/Skills";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
