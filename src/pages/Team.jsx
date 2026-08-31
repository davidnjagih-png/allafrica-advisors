// src/pages/Team.jsx
import React, { useContext } from "react";
import { TeamContext } from "../context/TeamContext";
import TeamCard from "../components/TeamCard";
import "../styles/Team.css";

function Team() {
  const { teamMembers } = useContext(TeamContext);

  return (
    <section className="page">
      <h2 className="title">Our WorkForce</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

export default Team;
