import React from "react";

function Services() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Our Services</h1>
      NMBK - A Cultural Academy, Creative Technology Studio and Community Platform.

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "30px"
      }}>

        <div style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
          width: "250px"
        }}>
          <h2>🌐 Websites for Artists</h2>
          <p>Professional websites for dancers, musicians and performers.</p>
        </div>

        <div style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
          width: "250px"
        }}>
          <h2>📖 Storytelling</h2>
          <p>Creative digital storytelling and cultural content.</p>
        </div>

        <div style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
          width: "250px"
        }}>
          <h2>💼 Small Business Solutions</h2>
          <p>Simple websites and digital support for small businesses.</p>
        </div>

      </div>
    </div>
  );
}

export default Services;