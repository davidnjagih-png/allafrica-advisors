// src/components/ContactSubmissions.jsx
import React, { useContext } from "react";
import { SubmissionsContext } from "./SubmissionsContext";
import "../styles/ContactSubmissions.css";

function ContactSubmissions() {
  const { submissions } = useContext(SubmissionsContext);

  return (
    <div className="contact-submissions">
      <h2>Contact Form Submissions</h2>
      <div className="submission-grid">
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          submissions.map((s, i) => (
            <div key={i} className="submission-card">
              <h3>{s.name}</h3>
              <p>
                <strong>Email:</strong> {s.email}
              </p>
              <p>
                <strong>Message:</strong> {s.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactSubmissions;
