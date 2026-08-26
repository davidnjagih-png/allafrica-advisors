// src/components/TeamCard.jsx
import React from "react";
import "../styles/Team.css"; // shared styling for cards

function TeamCard({ name, position, bio, photo }) {
  return (
    <div className="team-card">
      <div className="team-image">
        <img src={photo} alt={`${name} headshot`} className="team-photo" />
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default TeamCard;
