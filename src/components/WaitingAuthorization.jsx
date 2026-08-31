import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function WaitingAuthorization() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <h2>Authorization Pending</h2>
      <p>Your account has been created but is awaiting admin approval.</p>
      <p>Please check back later.</p>
      <button onClick={() => navigate("/")}>Back to Website</button>
    </div>
  );
}

export default WaitingAuthorization;
