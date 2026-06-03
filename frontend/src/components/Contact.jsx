function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        background: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        minHeight: "100vh"
      }}
    >
      <h1>Contact Us</h1>

      <div
        style={{
          background: "white",
          width: "60%",
          margin: "auto",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px gray"
        }}
      >
        <p>📧 Email: servernmbk@gmail.com</p>
        <p>📞 Phone: +91 9876543210</p>
        <p>📍 Address: NMBK Cultural Center</p>
      </div>
    </div>
  );
}

export default Contact;