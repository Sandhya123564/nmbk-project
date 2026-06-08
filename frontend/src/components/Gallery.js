import React from "react";

import bharatanatyam from "../assets/images/bharatanatyam.jpg";
import yoga from "../assets/images/yoga.jpg";
import bhajan from "../assets/images/bhajan.jpg";

function Gallery() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Gallery</h1>

      <p>Our Cultural and Wellness Activities</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}
      >
        <img
          src={bharatanatyam}
          alt="Bharatanatyam"
          style={{ width: "250px", borderRadius: "10px" }}
        />

        <img
          src={yoga}
          alt="Yoga"
          style={{ width: "250px", borderRadius: "10px" }}
        />

        <img
          src={bhajan}
          alt="Bhajan"
          style={{ width: "250px", borderRadius: "10px" }}
        />
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  }}
></div>
      </div>
    </div>
  );
}

export default Gallery;