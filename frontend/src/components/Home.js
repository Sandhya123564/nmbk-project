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

        <p style={{ fontSize: "24px", maxWidth: "700px", margin: "auto" }}>
          Explore Culture, Wellness and Spiritual Growth through
          Bharatanatyam, Yoga and Bhajan activities.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            background: "#f97316",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px"
          }}
        >
          Explore Activities
        </button>
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
        <h2 style={{ color: "#1e3c72" }}>Why Choose NMBK?</h2>

        <p>✓ Cultural Development</p>
        <p>✓ Wellness Activities</p>
        <p>✓ Spiritual Growth</p>
        <p>✓ Student Engagement</p>
      </div>
    </div>
  );
}

export default Home;