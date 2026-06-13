import React, { useState } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      user: "",
      bot: "👋 Hello! Welcome to NMBK.\nHow can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const getReply = (text) => {
    text = text.toLowerCase();

    if (text.includes("yoga")) {
      return "Yoga classes are available on Monday, Wednesday and Saturday (IST).";
    } else if (text.includes("bharatanatyam")) {
      return "Bharatanatyam classes are available for children, teens and adults.";
    } else if (text.includes("bhajan")) {
      return "Bhajan classes are held on Friday and Sunday.";
    } else if (text.includes("contact")) {
      return "You can contact us through the Contact page or WhatsApp.";
    } else if (text.includes("fees")) {
      return "Please contact NMBK for fee details.";
    } else if (text.includes("trial")) {
      return "A free trial class is available.";
    } else if (text.includes("whatsapp")) {
      return "Please use the WhatsApp button on our website.";
    } else {
      return "Please contact NMBK for more information.";
    }
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const reply = getReply(input);

    setMessages((prev) => [
      ...prev,
      {
        user: input,
        bot: reply
      }
    ]);

    setInput("");
  };

  const quickMessage = (text) => {
    const reply = getReply(text);

    setMessages((prev) => [
      ...prev,
      {
        user: text,
        bot: reply
      }
    ]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#1e3c72",
          color: "white",
          border: "none",
          fontSize: "28px",
          cursor: "pointer"
        }}
      >
        🤖
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        width: "90%",
        maxWidth: "320px",
        background: "white",
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h3>NMBK ChatBot 🤖</h3>

        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "5px 8px"
          }}
        >
          ❌
        </button>
      </div>

      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "5px",
          marginBottom: "10px"
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.user && (
              <p>
                <b>You:</b> {msg.user}
              </p>
            )}

            <p>
              <b>Bot:</b> {msg.bot}
            </p>

            <hr />
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => quickMessage("yoga")}>
          🧘 Yoga
        </button>

        <button
          onClick={() => quickMessage("bharatanatyam")}
          style={{ marginLeft: "5px" }}
        >
          💃 Dance
        </button>

        <button
          onClick={() => quickMessage("bhajan")}
          style={{ marginLeft: "5px" }}
        >
          🎵 Bhajan
        </button>

        <button
          onClick={() => quickMessage("contact")}
          style={{ marginTop: "5px" }}
        >
          📞 Contact
        </button>

        <button
          onClick={() => quickMessage("trial")}
          style={{ marginLeft: "5px" }}
        >
          🎓 Trial
        </button>
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        placeholder="Ask something..."
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          width: "100%",
          padding: "10px",
          background: "#1e3c72",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatBot;