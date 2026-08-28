import React, { useContext } from "react";
import { ServicesContext } from "../context/ServicesContext";
import "../styles/Services.css";

function Services() {
  const { services } = useContext(ServicesContext);

  return (
    <section className="page">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={s.image} alt={s.title} className="service-image" />
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
