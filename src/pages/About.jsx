import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About AllAfrica Advisors</h1>
        <p>
          We are a consultancy dedicated to empowering businesses, governments,
          and organizations across Africa with strategic insights, innovative
          solutions, and actionable guidance.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide trusted advisory services that drive sustainable growth,
          foster collaboration, and unlock opportunities across diverse sectors
          and regions of Africa.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> We uphold transparency and
            accountability in all engagements.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace creativity and
            forward‑thinking solutions.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in partnerships that
            amplify impact.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for the highest standards in
            our work.
          </li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Our Team</h2>
        <p>
          Our diverse team of consultants brings expertise in economics,
          business strategy, policy analysis, and technology. Together, we
          deliver tailored solutions that meet the unique needs of our clients.
        </p>
      </section>
    </div>
  );
}

export default About;
