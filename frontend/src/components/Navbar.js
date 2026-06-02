import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/enrichment" style={{ color: "white", marginRight: "15px" }}>Enrichment</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;