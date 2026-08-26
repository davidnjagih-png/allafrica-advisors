// src/components/ContactFormCard.jsx
import React from "react";
import "../styles/ContactFormCard.css";

function ContactFormCard() {
  return (
    <div className="contact-card">
      <h3>Send Us a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactFormCard;
