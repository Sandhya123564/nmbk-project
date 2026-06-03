import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        background: "#f4f8fb",
        minHeight: "100vh"
      }}
    >
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Enter Name"
        style={{ width: "300px", padding: "10px" }}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        style={{ width: "300px", padding: "10px" }}
      />

      <br /><br />

      <textarea
        placeholder="Enter Message"
        rows="5"
        style={{ width: "300px", padding: "10px" }}
      />

      <br /><br />

      <button
        style={{
          background: "#1e3c72",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Contact;