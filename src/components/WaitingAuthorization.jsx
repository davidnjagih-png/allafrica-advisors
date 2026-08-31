import React from "react";
import "../styles/Auth.css";

function WaitingAuthorization() {
  return (
    <div className="auth-page">
      <h2>Authorization Pending</h2>
      <p>Your account has been created but is awaiting admin approval.</p>
      <p>Please check back later.</p>
    </div>
  );
}

export default WaitingAuthorization;
