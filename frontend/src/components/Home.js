function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#1e3c72,#2a5298)",
        color: "white",
        textAlign: "center",
        padding: "50px"
      }}
    >
      <h1 style={{ fontSize: "45px" }}>
        🌸 NMBK Cultural Activities 🌸
      </h1>

      <p style={{ fontSize: "22px" }}>
        Explore Culture, Wellness and Spiritual Growth
      </p>

      <button
        style={{
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          background: "#ff9800",
          color: "white",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Explore Activities
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            background: "white",
            color: "#003366",
            padding: "20px",
            borderRadius: "15px",
            width: "250px"
          }}
        >
          <h2>💃 Bharatanatyam</h2>
          <p>Classical dance expressing culture and tradition.</p>
        </div>

        <div
          style={{
            background: "white",
            color: "#003366",
            padding: "20px",
            borderRadius: "15px",
            width: "250px"
          }}
        >
          <h2>🧘 Yoga</h2>
          <p>Improve physical and mental well-being.</p>
        </div>

        <div
          style={{
            background: "white",
            color: "#003366",
            padding: "20px",
            borderRadius: "15px",
            width: "250px"
          }}
        >
          <h2>🎵 Bhajan</h2>
          <p>Spiritual devotion through music and prayer.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;