import React, { useContext, useState, useEffect } from "react";
import { SectorsRegionsContext } from "../context/SectorsRegionsContext";
import { RegionsContext } from "../context/RegionsContext";
import "../styles/SectorsRegions.css";

function SectorsRegions() {
  const { sectorsRegions } = useContext(SectorsRegionsContext);
  const { regions } = useContext(RegionsContext);
  const [activeRegion, setActiveRegion] = useState(regions[0]?.name || "");

  // Auto-scroll through regions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (regions.length > 0) {
        const currentIndex = regions.findIndex((r) => r.name === activeRegion);
        const nextIndex = (currentIndex + 1) % regions.length;
        setActiveRegion(regions[nextIndex].name);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeRegion, regions]);

  return (
    <section className="page">
      {/* Sectors Grid */}
      <h2 className="sr-title">Sectors</h2>
      <div className="sr-grid">
        {sectorsRegions.map((item, i) => (
          <div key={i} className="sr-card">
            <img src={item.image} alt={item.sector} className="sr-image" />
            <h3>{item.sector}</h3>
            <p>
              <strong>Region:</strong> {item.region}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Regions Navbar + Dynamic Card */}
      <h2 className="sr-title">Regions</h2>
      <nav className="regions-navbar">
        {regions.map((r, i) => (
          <button
            key={i}
            className={`region-tab ${activeRegion === r.name ? "active" : ""}`}
            onClick={() => setActiveRegion(r.name)}
          >
            {r.name}
          </button>
        ))}
      </nav>

      <div className="region-card">
        {regions
          .filter((r) => r.name === activeRegion)
          .map((r, i) => (
            <div key={i}>
              <img src={r.image} alt={r.name} className="region-image" />
              <h3>{r.name}</h3>
              <p>{r.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default SectorsRegions;
