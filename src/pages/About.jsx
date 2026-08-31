import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About AllAfrica Advisors</h1>
        <p>
          We are a consultancy dedicated to empowering businesses, governments,
          and organizations across Africa with strategic insights, innovative
          solutions, and actionable guidance.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide trusted advisory services that drive sustainable growth,
          foster collaboration, and unlock opportunities across diverse sectors
          and regions of Africa.
        </p>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> Transparency and accountability in all
            engagements.
          </li>
          <li>
            <strong>Innovation:</strong> Creativity and forward‑thinking
            solutions.
          </li>
          <li>
            <strong>Collaboration:</strong> Partnerships that amplify impact.
          </li>
          <li>
            <strong>Excellence:</strong> Highest standards in our work.
          </li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2020</span>
            <p>
              Founded with a vision to transform advisory services in Africa.
            </p>
          </div>
          <div className="timeline-item">
            <span className="year">2022</span>
            <p>Expanded into regional policy advisory and sector insights.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>
              Launched digital dashboards for client engagement and reporting.
            </p>
          </div>
          <div className="timeline-item">
            <span className="year">2026</span>
            <p>
              Recognized as a trusted partner for governments and businesses
              across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="about-team">
        <h2>Our Team</h2>
        <p>
          Our diverse team of consultants brings expertise in economics,
          business strategy, policy analysis, and technology. Together, we
          deliver tailored solutions that meet the unique needs of our clients.
        </p>
        <div className="team-cards">
          <div className="team-card">
            <img src="/assets/team1.jpg" alt="Consultant" />
            <h3>Jane Doe</h3>
            <p>Policy Advisor</p>
          </div>
          <div className="team-card">
            <img src="/assets/team2.jpg" alt="Consultant" />
            <h3>John Smith</h3>
            <p>Economic Strategist</p>
          </div>
          <div className="team-card">
            <img src="/assets/team3.jpg" alt="Consultant" />
            <h3>Mary Johnson</h3>
            <p>Technology Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
