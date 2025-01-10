import React, { useState } from "react";

function CustomerSupport() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted. We'll get back to you soon!");
    setName("");
    setEmail("");
    setMessage("");
  };

  // Handle live chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim() !== "") {
      setChatMessages((prevMessages) => [...prevMessages, { user: "You", text: chatInput }]);
      setChatInput("");

      // Simulate a bot response
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { user: "Support Bot", text: "Thank you for reaching out! How can I assist you further?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="grd">
      <h1 className="heading">Customer Support</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Contact Form Section */}
        <div style={{ flex: 1 }}>
          <h2 className="sub">Contact Us</h2>
          <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
              Submit
            </button>
          </form>
        </div>



      {/* Live Chat Section */}
      
      
    
      </div> 
    </div>
  );
}

export default CustomerSupport;
