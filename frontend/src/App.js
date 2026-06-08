import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Enrichment from "./components/Enrichment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoEditing from "./components/VideoEditing";
import Gallery from "./components/Gallery";

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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;