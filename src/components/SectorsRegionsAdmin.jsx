import React, { useContext, useState } from "react";
import { SectorsRegionsContext } from "../context/SectorsRegionsContext";
import "../styles/SectorsRegionsAdmin.css";

function SectorsRegionsAdmin() {
  const { sectorsRegions, addItem, updateItem, deleteItem } = useContext(
    SectorsRegionsContext,
  );
  const [newItem, setNewItem] = useState({
    sector: "",
    region: "",
    description: "",
    image: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem.sector || !newItem.region) return;
    addItem(newItem);
    setNewItem({ sector: "", region: "", description: "", image: "" });
  };

  return (
    <div className="sr-admin">
      <h2>Manage Sectors</h2>

      {/* Add New Sector */}
      <form onSubmit={handleAdd} className="sr-form">
        <input
          type="text"
          placeholder="Sector"
          value={newItem.sector}
          onChange={(e) => setNewItem({ ...newItem, sector: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Region"
          value={newItem.region}
          onChange={(e) => setNewItem({ ...newItem, region: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <button type="submit">➕ Add Sector</button>
      </form>

      {/* Existing Sectors */}
      <div className="sr-grid">
        {sectorsRegions.map((item, i) => (
          <div key={i} className="sr-card">
            <img src={item.image} alt={item.sector} className="sr-image" />
            <h3>{item.sector}</h3>
            <p>
              <strong>Region:</strong> {item.region}
            </p>
            <p>{item.description}</p>
            <button onClick={() => deleteItem(i)} className="delete-btn">
              ❌ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectorsRegionsAdmin;
