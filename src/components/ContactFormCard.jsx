// src/components/ContactFormCard.jsx
import React, { useState, useContext } from "react";
import { SubmissionsContext } from "../context/SubmissionsContext";
import "../styles/ContactFormCard.css";

function ContactFormCard() {
  const { addSubmission } = useContext(SubmissionsContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    addSubmission(formData); // persists via context + localStorage
    setFormData({ name: "", email: "", message: "" });
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-card">
      <h3>Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {error && <p className="error-text">{error}</p>}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactFormCard;
