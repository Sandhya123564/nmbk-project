import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/image.png";

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
      {/* Logo */}
      <img
        src={logo}
        alt="NMBK Logo"
        style={{ height: "60px" }}
      />

      {/* Navigation Links */}
      <div>
        <Link to="/" style={{ color: "white", margin: "15px" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", margin: "15px" }}>
          About
        </Link>
        <Link to="/classes" style={{ color: "white", margin: "15px" }}>
  Classes
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