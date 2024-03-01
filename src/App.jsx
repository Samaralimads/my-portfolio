import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
