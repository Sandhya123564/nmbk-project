import React from "react";

function Gallery() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Gallery</h1>

      <p>Our Cultural and Wellness Activities</p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        <img src="https://via.placeholder.com/250" alt="Activity 1" />
        <img src="https://via.placeholder.com/250" alt="Activity 2" />
        <img src="https://via.placeholder.com/250" alt="Activity 3" />
      </div>
    </div>
  );
}

export default Gallery;