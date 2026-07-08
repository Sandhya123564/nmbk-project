require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;


  try {
    const info = await resend.emails.send({
  from: process.env.FROM_EMAIL,
  to: process.env.TO_EMAIL,
  subject: "New Contact Form Message - NMBK",
  text: `
Name: ${name}

Email: ${email}

Message:
${message}
  `,
});

console.log("Email sent:", info);

    res.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

app.get("/", (req, res) => {
  res.send("NMBK Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});