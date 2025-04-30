// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Blogs />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </main>
    
  );
}