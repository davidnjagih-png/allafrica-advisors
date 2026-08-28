import React, { useContext, useState } from "react";
import { ServicesContext } from "../context/ServicesContext";
import "../styles/ServicesAdmin.css";

function ServicesAdmin() {
  const { services, addService, updateService, deleteService } =
    useContext(ServicesContext);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (index, field, value) => {
    const updated = { ...services[index], [field]: value };
    updateService(index, updated);
  };

  const handleFileUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(index, "image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNewFileUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewService({ ...newService, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (!newService.title || !newService.description) return;
    addService(newService);
    setNewService({ title: "", description: "", image: "" });
  };

  return (
    <div className="services-admin">
      <h2>Manage Services</h2>

      {/* Add New Service Form */}
      <form onSubmit={handleAddService} className="new-service-form">
        <input
          type="text"
          placeholder="Service Title"
          value={newService.title}
          onChange={(e) =>
            setNewService({ ...newService, title: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Service Description"
          value={newService.description}
          onChange={(e) =>
            setNewService({ ...newService, description: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newService.image}
          onChange={(e) =>
            setNewService({ ...newService, image: e.target.value })
          }
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleNewFileUpload(e.target.files[0])}
        />
        <button type="submit">➕ Add Service</button>
      </form>

      {/* Existing Services Grid */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="admin-card">
            <img src={s.image} alt="preview" className="admin-photo" />
            <form onSubmit={(e) => e.preventDefault()} className="admin-form">
              <input
                type="text"
                placeholder="Title"
                value={s.title}
                onChange={(e) => handleChange(i, "title", e.target.value)}
              />
              <textarea
                placeholder="Description"
                value={s.description}
                onChange={(e) => handleChange(i, "description", e.target.value)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={s.image}
                onChange={(e) => handleChange(i, "image", e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(i, e.target.files[0])}
              />
              <div className="form-actions">
                <button type="button">✅ Save Changes</button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteService(i)}
                >
                  ❌ Delete
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesAdmin;
