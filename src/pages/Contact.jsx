// src/pages/Contact.jsx
import React from "react";
import ContactFormCard from "../components/ContactFormCard";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>
          <strong>📍 Address:</strong> 1717 K Street NW, Suite 900, Washington
          DC 20006
        </p>
        <p>
          <strong>✉️ Email:</strong> info@allafricadvisors.com
        </p>
        <p>
          <strong>📞 Phone:</strong> +1 (202) 555-1234
        </p>
      </div>
      <ContactFormCard />
    </section>
  );
}

export default Contact;
