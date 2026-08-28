// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa"; // dashboard icon
//import logo from "../assets/logo.png"; // place your logo file in src/assets

import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* <img src={logo} alt="AllAfrica Advisors Logo" className="nav-logo" /> */}
        <span className="nav-title">AllAfrica Advisors</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/sectors">Sectors & Regions</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="dashboard-link">
          <NavLink to="/dashboard">
            <FaTachometerAlt className="dashboard-icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
