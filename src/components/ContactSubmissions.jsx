// src/components/ContactSubmissions.jsx
import React, { useState } from "react";
import "../styles/ContactSubmissions.css";

function ContactSubmissions() {
  const [submissions, setSubmissions] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      message: "Interested in advisory services.",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Looking for market intelligence.",
    },
  ]);

  return (
    <div className="contact-submissions">
      <h2>Contact Form Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactSubmissions;
