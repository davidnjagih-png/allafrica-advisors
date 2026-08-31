import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
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
            <NavLink to="/">⬅ Back to Main Site</NavLink>
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
