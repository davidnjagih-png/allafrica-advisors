import React, { useContext, useState } from "react";
import { RegionsContext } from "../context/RegionsContext";
import "../styles/RegionsAdmin.css";

function RegionsAdmin() {
  const { regions, addRegion, deleteRegion } = useContext(RegionsContext);
  const [newRegion, setNewRegion] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newRegion.name) return;
    addRegion(newRegion);
    setNewRegion({ name: "", description: "", image: "" });
  };

  return (
    <div className="regions-admin">
      <h2>Manage Regions</h2>

      {/* Add New Region */}
      <form onSubmit={handleAdd} className="region-form">
        <input
          type="text"
          placeholder="Region/Country Name"
          value={newRegion.name}
          onChange={(e) => setNewRegion({ ...newRegion, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newRegion.description}
          onChange={(e) =>
            setNewRegion({ ...newRegion, description: e.target.value })
          }
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={newRegion.image}
          onChange={(e) =>
            setNewRegion({ ...newRegion, image: e.target.value })
          }
        />
        <button type="submit">➕ Add Region</button>
      </form>

      {/* Existing Regions */}
      <div className="regions-list">
        {regions.map((r, i) => (
          <div key={i} className="region-item">
            <img src={r.image} alt={r.name} className="region-thumb" />
            <div>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
            </div>
            <button onClick={() => deleteRegion(i)} className="delete-btn">
              ❌ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegionsAdmin;
