// src/components/TeamAdmin.jsx
import React, { useState } from "react";
import TeamCard from "./TeamCard";
import "../styles/TeamAdmin.css";

function TeamAdmin() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Founder Name",
      position: "Founder & Managing Partner",
      bio: "Expert in Washington–Africa bridge.",
      photo: "/images/founder.jpg",
    },
  ]);

  const addMember = () => {
    setTeamMembers([
      ...teamMembers,
      {
        name: "New Member",
        position: "Position",
        bio: "Short bio here.",
        photo: "/images/default.jpg",
      },
    ]);
  };

  return (
    <div className="team-admin">
      <h2>Manage Team</h2>
      <button onClick={addMember}>Add Member</button>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default TeamAdmin;
