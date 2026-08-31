import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ServicesContext } from "../context/ServicesContext";
import "../styles/Home.css";

function Home() {
  const { services } = useContext(ServicesContext);
  const [visibleServices, setVisibleServices] = useState([]);

  // Function to pick 4 random services
  const pickRandomServices = () => {
    if (services.length <= 4) {
      setVisibleServices(services);
      return;
    }
    const shuffled = [...services].sort(() => 0.5 - Math.random());
    setVisibleServices(shuffled.slice(0, 4));
  };

  useEffect(() => {
    pickRandomServices();
    const interval = setInterval(() => {
      pickRandomServices();
    }, 10000); // change every 10 seconds
    return () => clearInterval(interval);
  }, [services]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Strategic Advisory for Africa’s Future</h1>
          <p>
            We empower governments, businesses, and organizations with insights,
            strategies, and solutions tailored to Africa’s dynamic landscape.
          </p>
          <NavLink to="/contact" className="cta-btn">
            Work With Us
          </NavLink>
        </div>
      </section>

      {/* Dynamic Services Preview */}
      <section className="services-preview">
        <h2>Our Core Solutions</h2>
        <div className="service-cards">
          {visibleServices.map((s, i) => (
            <div key={i} className="service-card">
              <img src={s.image} alt={s.title} className="service-image" />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <NavLink to="/services">Explore Services</NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Partner With Us</h2>
        <p>Let’s shape Africa’s future together through strategic advisory.</p>
        <NavLink to="/contact" className="cta-btn">
          Get in Touch
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
