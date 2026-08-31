import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // user icon
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
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
        <li className="user-link">
          <NavLink to="/login">
            <FaUserCircle className="user-icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
