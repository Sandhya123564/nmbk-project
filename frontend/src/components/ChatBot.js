import React, { useState } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    let reply = "Please contact NMBK for more information.";

    if (input.toLowerCase().includes("yoga")) {
      reply = "Yoga classes are available on Monday, Wednesday and Saturday (IST).";
    } else if (input.toLowerCase().includes("bharatanatyam")) {
      reply = "Bharatanatyam classes are available for children, teens and adults.";
    } else if (input.toLowerCase().includes("bhajan")) {
      reply = "Bhajan classes are held on Friday and Sunday.";
    } else if (input.toLowerCase().includes("contact")) {
      reply = "You can contact us through the Contact page or WhatsApp.";
    }
    else if (input.toLowerCase().includes("fees")) {
  reply = "Please contact NMBK for fee details.";
}

else if (input.toLowerCase().includes("trial")) {
  reply = "A free trial class is available.";
}

else if (input.toLowerCase().includes("whatsapp")) {
  reply = "Please use the WhatsApp button on our website.";
}

    setMessages([
      ...messages,
      { user: input, bot: reply }
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        background: "white",
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "10px"
      }}
    >
      <h3>NMBK ChatBot 🤖</h3>

      <div style={{ height: "200px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <p><b>You:</b> {msg.user}</p>
            <p><b>Bot:</b> {msg.bot}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatBot;