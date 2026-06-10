import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg,#0f172a,#1e3c72)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px"
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          NMBK Cultural Activities
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "700px",
            margin: "auto"
          }}
        >
          Explore Culture, Wellness and Spiritual Growth through
          Bharatanatyam, Yoga and Bhajan activities.
        </p>

        
        
         <Link to="/enrichment">
  <button
    style={{
      marginTop: "30px",
      padding: "15px 30px",
      background: "#f97316",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "18px",
      cursor: "pointer"
    }}
  >
    Explore Activities
  </button>
</Link>
      </div>

      {/* Activity Cards */}
      <div
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          background: "#f8fafc"
        }}
      >
        <div
          style={{
            background: "white",
            width: "280px",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h2>💃 Bharatanatyam</h2>
          <p>Classical dance expressing culture and tradition.</p>
        </div>

        <div
          style={{
            background: "white",
            width: "280px",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h2>🧘 Yoga</h2>
          <p>Improve physical and mental well-being.</p>
        </div>

        <div
          style={{
            background: "white",
            width: "280px",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h2>🎵 Bhajan</h2>
          <p>Spiritual devotion through music and prayer.</p>
        </div>
      </div>

      {/* Why Choose NMBK */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "white"
        }}
      >
        <h2
          style={{
            color: "#1e3c72",
            fontSize: "36px"
          }}
        >
          Why Choose NMBK?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            fontSize: "18px",
            color: "#444"
          }}
        >
          We combine Culture, Wellness and Technology to help
          students learn, grow and express their creativity.
        </p>
      </div>

      {/* Vision Section */}
      <div
        style={{
          background: "#1e3c72",
          color: "white",
          textAlign: "center",
          padding: "60px 20px"
        }}
      >
        <h2>Our Vision</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          At NMBK, we believe technology should amplify creativity,
          preserve culture and build meaningful connections across
          communities.
        </p>
      </div>
      {/* Statistics Section */}
<div
  style={{
    background: "#f8fafc",
    padding: "60px 20px",
    textAlign: "center"
  }}
>
  <h2 style={{ color: "#1e3c72" }}>Our Impact</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      flexWrap: "wrap",
      marginTop: "20px"
    }}
  >
    <div>
      <h1 style={{ color: "#ff9800" }}>500+</h1>
      <p>Students</p>
    </div>

    <div>
      <h1 style={{ color: "#ff9800" }}>50+</h1>
      <p>Programs</p>
    </div>

    <div>
      <h1 style={{ color: "#ff9800" }}>100+</h1>
      <p>Learning Hours</p>
    </div>
  </div>
</div>
{/* Testimonials */}
<div
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "white"
  }}
>
  <h2 style={{ color: "#1e3c72" }}>Testimonials</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap"
    }}
  >
    <div
      style={{
        background: "#f8fafc",
        padding: "20px",
        width: "300px",
        borderRadius: "10px"
      }}
    >
      <p>"The Bharatanatyam classes helped me connect with my roots."</p>
      <b>- Student</b>
    </div>

    <div
      style={{
        background: "#f8fafc",
        padding: "20px",
        width: "300px",
        borderRadius: "10px"
      }}
    >
      <p>"Excellent cultural and wellness programs."</p>
      <b>- Parent</b>
    </div>
  </div>
</div>
{/* Featured Activities */}
<div
  style={{
    background: "#1e3c72",
    color: "white",
    textAlign: "center",
    padding: "60px 20px"
  }}
>
  <h2>Featured Activities</h2>

  <p>💃 Bharatanatyam</p>
  <p>🧘 Yoga & Meditation</p>
  <p>🎵 Bhajan & Devotional Music</p>
  <p>🎬 Video Editing</p>
</div>
{/* Announcements */}
<div
  style={{
    background: "#ff9800",
    color: "white",
    textAlign: "center",
    padding: "30px"
  }}
>
  <h2>Announcements</h2>
  <p>Admissions Open for Cultural & Wellness Programs 2026</p>
</div>
{/* Upcoming Events */}
<div
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "#f8fafc"
  }}
>
  <h2 style={{ color: "#1e3c72" }}>Upcoming Events</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "20px"
    }}
  >
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h3>🧘 Yoga Workshop</h3>
      <p>Learn mindfulness and wellness techniques.</p>
    </div>

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h3>💃 Bharatanatyam Performance</h3>
      <p>Showcase of classical dance talents.</p>
    </div>

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h3>🎵 Bhajan Competition</h3>
      <p>Spiritual music and devotional singing.</p>
    </div>
  </div>
</div>
{/* Our Team */}
<div
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "white"
  }}
>
  <h2 style={{ color: "#1e3c72" }}>Our Team</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "20px"
    }}
  >
    <div
      style={{
        background: "#f8fafc",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h3>Program Coordinator</h3>
      <p>Managing cultural and wellness activities.</p>
    </div>

    <div
      style={{
        background: "#f8fafc",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h3>Yoga Trainer</h3>
      <p>Guiding students in health and mindfulness.</p>
    </div>

    <div
      style={{
        background: "#f8fafc",
        padding: "20px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h3>Cultural Mentor</h3>
      <p>Supporting dance, music and creative activities.</p>
    </div>
  </div>
</div>
<div
  style={{
    background: "#1e3c72",
    color: "white",
    textAlign: "center",
    padding: "50px",
    marginTop: "40px"
  }}
>
  <h2>Start Your Cultural Journey with NMBK</h2>

  <p>
    Join our Yoga, Bharatanatyam and Bhajan classes
    and become part of our creative community.
  </p>

  <Link to="/classes">
  <button
    style={{
      padding: "12px 25px",
      background: "#ff9800",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    }}
  >
    Register Now
  </button>
</Link>
</div>
    </div>
  );
}

export default Home;