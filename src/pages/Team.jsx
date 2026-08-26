// src/pages/Team.jsx
import React from "react";
import TeamCard from "../components/TeamCard";
import "./../styles/Team.css";

function Team() {
  const teamMembers = [
    {
      name: "Founder Name",
      position: "Founder & Managing Partner",
      bio: "150–250 word bio highlighting expertise, Washington–Africa bridge, and representative engagements.",
      photo: "/images/founder.jpg",
    },
    {
      name: "Advisor One",
      position: "Senior Advisor",
      bio: "Advisor One specializes in energy and infrastructure projects across West Africa.",
      photo: "/images/advisor1.jpg",
    },
    {
      name: "Advisor Two",
      position: "Policy Analyst",
      bio: "Advisor Two provides regulatory and political risk analysis for clients entering East African markets.",
      photo: "/images/advisor2.jpg",
    },
  ];

  return (
    <section className="page">
      <h2>Leadership</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            bio={member.bio}
            photo={member.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
