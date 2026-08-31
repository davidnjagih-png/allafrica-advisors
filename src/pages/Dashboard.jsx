// src/pages/Dashboard.jsx
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const isRootDashboard = location.pathname === "/dashboard";

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <NavLink to="team-admin">Manage Team</NavLink>
          </li>
          <li>
            <NavLink to="services-admin">Manage Services</NavLink>
          </li>
          <li>
            <NavLink to="sectors-admin">Manage Sectors</NavLink>
          </li>
          <li>
            <NavLink to="regions-admin">Manage Regions</NavLink>
          </li>
          <li>
            <NavLink to="contact-submissions">Contact Submissions</NavLink>
          </li>
          <li>
            <NavLink to="users-admin">Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/">⬅ Back to Main Site</NavLink>
          </li>
        </ul>
      </aside>

      <main className="dashboard-content">
        {isRootDashboard && (
          <div className="admin-landing">
            <h1>Welcome to the Admin Panel</h1>
            <p>Select a section below to manage content:</p>
            <div className="admin-buttons">
              <NavLink to="team-admin" className="admin-btn">
                Manage Team
              </NavLink>
              <NavLink to="services-admin" className="admin-btn">
                Manage Services
              </NavLink>
              <NavLink to="sectors-admin" className="admin-btn">
                Manage Sectors
              </NavLink>
              <NavLink to="regions-admin" className="admin-btn">
                Manage Regions
              </NavLink>
              <NavLink to="contact-submissions" className="admin-btn">
                Contact Submissions
              </NavLink>
              <NavLink to="users-admin" className="admin-btn">
                Manage Users
              </NavLink>
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
