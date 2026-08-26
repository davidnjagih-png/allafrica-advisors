// src/pages/Dashboard.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <NavLink to="team-admin">Manage Team</NavLink>
          </li>
          <li>
            <NavLink to="contact-submissions">Contact Submissions</NavLink>
          </li>
        </ul>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
