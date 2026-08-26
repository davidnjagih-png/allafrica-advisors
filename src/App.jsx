// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeamAdmin from "./components/TeamAdmin";
import ContactSubmissions from "./components/ContactSubmissions";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SectorsRegions from "./pages/SectorsRegions";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

// Global styles
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<SectorsRegions />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dashboard with child routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="team-admin" element={<TeamAdmin />} />
            <Route
              path="contact-submissions"
              element={<ContactSubmissions />}
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
