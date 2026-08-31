import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import TeamAdmin from "./components/TeamAdmin";
import ServicesAdmin from "./components/ServicesAdmin";
import ContactSubmissions from "./components/ContactSubmissions";
import SectorsRegionsAdmin from "./components/SectorsRegionsAdmin";
import RegionsAdmin from "./components/RegionsAdmin";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SectorsRegions from "./pages/SectorsRegions";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import { TeamProvider } from "./context/TeamContext";
import { ServicesProvider } from "./context/ServicesContext";
import { SubmissionsProvider } from "./context/SubmissionsContext";
import { SectorsRegionsProvider } from "./context/SectorsRegionsContext";
import { RegionsProvider } from "./context/RegionsContext";

import "./index.css";

function App() {
  return (
    <TeamProvider>
      <ServicesProvider>
        <SubmissionsProvider>
          <SectorsRegionsProvider>
            <RegionsProvider>
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

                    {/* Dashboard Admin Routes */}
                    <Route path="/dashboard" element={<Dashboard />}>
                      <Route path="team-admin" element={<TeamAdmin />} />
                      <Route
                        path="services-admin"
                        element={<ServicesAdmin />}
                      />
                      <Route
                        path="contact-submissions"
                        element={<ContactSubmissions />}
                      />
                      <Route
                        path="sectors-admin"
                        element={<SectorsRegionsAdmin />}
                      />
                      <Route path="regions-admin" element={<RegionsAdmin />} />
                    </Route>
                  </Routes>
                </main>
                <Footer />
              </Router>
            </RegionsProvider>
          </SectorsRegionsProvider>
        </SubmissionsProvider>
      </ServicesProvider>
    </TeamProvider>
  );
}

export default App;
