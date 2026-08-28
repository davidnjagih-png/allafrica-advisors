// src/components/TeamAdmin.jsx
import React, { useContext } from "react";
import { TeamContext } from "../context/TeamContext";
import "../styles/TeamAdmin.css";

function TeamAdmin() {
  const { teamMembers, updateMember, addMember, deleteMember } =
    useContext(TeamContext);

  const handleChange = (index, field, value) => {
    const updated = { ...teamMembers[index], [field]: value };
    updateMember(index, updated);
  };

  const handleFileUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(index, "photo", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (index) => {
    alert(`Changes saved for ${teamMembers[index].name || "this member"}`);
  };

  return (
    <div className="team-admin">
      <h2>Manage Team</h2>
      <button
        className="add-btn"
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
            <img src={member.photo} alt="preview" className="admin-photo" />
            <form className="admin-form" onSubmit={(e) => e.preventDefault()}>
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
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(index, e.target.files[0])}
              />
              <div className="form-actions">
                <button type="button" onClick={() => handleSubmit(index)}>
                  ✅ Save Changes
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteMember(index)}
                >
                  ❌ Delete
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamAdmin;
