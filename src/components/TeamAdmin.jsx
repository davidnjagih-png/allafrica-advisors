// src/components/TeamAdmin.jsx
import React, { useContext } from "react";
import { TeamContext } from "./TeamContext";
import "../styles/TeamAdmin.css";

function TeamAdmin() {
  const { teamMembers, updateMember, addMember } = useContext(TeamContext);

  const handleChange = (index, field, value) => {
    const updated = { ...teamMembers[index], [field]: value };
    updateMember(index, updated);
  };

  return (
    <div className="team-admin">
      <h2>Manage Team</h2>
      <button
        onClick={() =>
          addMember({
            name: "",
            position: "",
            bio: "",
            photo: "/images/default.jpg",
          })
        }
      >
        ➕ Add Member
      </button>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="admin-card">
            <img
              src={member.photo}
              alt={`${member.name} headshot`}
              className="admin-photo"
            />
            <form className="admin-form">
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Position"
                value={member.position}
                onChange={(e) =>
                  handleChange(index, "position", e.target.value)
                }
              />
              <textarea
                placeholder="Bio"
                value={member.bio}
                onChange={(e) => handleChange(index, "bio", e.target.value)}
              />
              <input
                type="text"
                placeholder="Photo URL"
                value={member.photo}
                onChange={(e) => handleChange(index, "photo", e.target.value)}
              />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamAdmin;
