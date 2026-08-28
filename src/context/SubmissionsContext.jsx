// src/components/SubmissionsContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const SubmissionsContext = createContext();

export function SubmissionsProvider({ children }) {
  const [submissions, setSubmissions] = useState(() => {
    // Load from localStorage on first render
    const saved = localStorage.getItem("submissions");
    return saved ? JSON.parse(saved) : [];
  });

  const addSubmission = (submission) => {
    setSubmissions((prev) => [...prev, submission]);
  };

  // Save to localStorage whenever submissions change
  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </SubmissionsContext.Provider>
  );
}
