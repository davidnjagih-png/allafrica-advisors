// src/components/TeamContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const TeamContext = createContext();

export function TeamProvider({ children }) {
  const [teamMembers, setTeamMembers] = useState(() => {
    const saved = localStorage.getItem("teamMembers");
    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "Founder Name",
            position: "Founder & Managing Partner",
            bio: "Expert in Washington–Africa bridge.",
            photo: "/images/founder.jpg",
          },
        ];
  });

  const addMember = (member) => {
    setTeamMembers((prev) => [...prev, member]);
  };

  const updateMember = (index, updated) => {
    const newMembers = [...teamMembers];
    newMembers[index] = updated;
    setTeamMembers(newMembers);
  };

  const deleteMember = (index) => {
    const newMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newMembers);
  };

  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  return (
    <TeamContext.Provider
      value={{ teamMembers, addMember, updateMember, deleteMember }}
    >
      {children}
    </TeamContext.Provider>
  );
}
