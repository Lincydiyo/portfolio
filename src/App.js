import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"; 
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
