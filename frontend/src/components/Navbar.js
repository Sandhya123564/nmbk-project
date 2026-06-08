import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#0f172a"
      }}
    >
      <h2 style={{ color: "white" }}>NMBK</h2>

      <div>
        <Link to="/" style={{ color: "white", margin: "15px" }}>
          Home
        </Link>

        <Link to="/enrichment" style={{ color: "white", margin: "15px" }}>
          Activities
        </Link>
        <Link to="/video-editing" style={{ color: "white", margin: "15px" }}>
  Video Editing
</Link>
<Link to="/gallery" style={{ color: "white", margin: "15px" }}>
  Gallery
</Link>

        <Link to="/contact" style={{ color: "white", margin: "15px" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;