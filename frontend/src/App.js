import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Enrichment from "./components/Enrichment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoEditing from "./components/VideoEditing";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Classes from "./components/Classes";
import Services from "./components/Services";
import ChatBot from "./components/ChatBot";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enrichment" element={<Enrichment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
      <ChatBot/>
    </Router>
  
  );
}

export default App;