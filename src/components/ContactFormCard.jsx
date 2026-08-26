// src/components/ContactFormCard.jsx
import React, { useState } from "react";
import "../styles/ContactFormCard.css";

function ContactFormCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Form submitted successfully!");
      // Here you could add backend integration
    }
  };

  return (
    <div className="contact-card">
      <h3>Send Us a Message</h3>
      <form onSubmit={validateEmail}>
        <input type="text" placeholder="Your Name" required />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="error-text">{error}</p>}
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactFormCard;
