import React, { useContext, useEffect, useState } from "react";
import { TeamContext } from "../context/TeamContext";
import "../styles/About.css";

function About() {
  const { teamMembers } = useContext(TeamContext);
  const [visibleTeam, setVisibleTeam] = useState([]);

  const pickRandomTeam = () => {
    if (!teamMembers || teamMembers.length === 0) return;
    if (teamMembers.length <= 3) {
      setVisibleTeam(teamMembers);
      return;
    }
    const shuffled = [...teamMembers].sort(() => 0.5 - Math.random());
    setVisibleTeam(shuffled.slice(0, 3));
  };

  useEffect(() => {
    pickRandomTeam();
    const interval = setInterval(() => {
      pickRandomTeam();
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers]);

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
        <div className="about-team-cards">
          {visibleTeam.map((member, i) => (
            <div key={i} className="about-team-card">
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
