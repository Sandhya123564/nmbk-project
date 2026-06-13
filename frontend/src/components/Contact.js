import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://nmbk-project-1.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <textarea name="message" onChange={handleChange} placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;