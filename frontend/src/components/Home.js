function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1>🌸 Welcome to NMBK Cultural Activities 🌸</h1>

      <p>
        NMBK provides cultural and wellness activities including
        Bharatanatyam, Yoga and Bhajan.
      </p>

      <div
        style={{
          background: "white",
          color: "#003366",
          padding: "20px",
          borderRadius: "15px",
          width: "80%",
          margin: "20px auto",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
      >
        <h2>Our Mission</h2>

        <p>
          To encourage students to participate in cultural,
          spiritual and wellness activities.
        </p>
      </div>
    </div>
  );
}

export default Home;