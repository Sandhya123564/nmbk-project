import React from "react";

function VideoEditing() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>🎬 Video Editing</h1>

      <p>
        Learn creative video editing skills using modern tools and techniques.
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "30px"
      }}>
        <div style={{
          background: "#f4f4f4",
          padding: "20px",
          width: "250px",
          borderRadius: "10px"
        }}>
          <h3>Adobe Premiere Pro</h3>
          <p>Professional video editing software.</p>
        </div>

        <div style={{
          background: "#f4f4f4",
          padding: "20px",
          width: "250px",
          borderRadius: "10px"
        }}>
          <h3>DaVinci Resolve</h3>
          <p>Editing, color correction and effects.</p>
        </div>

        <div style={{
          background: "#f4f4f4",
          padding: "20px",
          width: "250px",
          borderRadius: "10px"
        }}>
          <h3>Filmora</h3>
          <p>Easy editing for beginners.</p>
        </div>
      </div>
    </div>
  );
}

export default VideoEditing;