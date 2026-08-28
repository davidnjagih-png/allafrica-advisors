import React, { createContext, useState, useEffect } from "react";

export const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("services");
    return saved
      ? JSON.parse(saved)
      : [
          {
            title: "Strategic Advisory",
            description: "Helping clients navigate complex markets.",
            image: "/images/advisory.jpg",
          },
        ];
  });

  const addService = (service) => setServices((prev) => [...prev, service]);
  const updateService = (index, updated) => {
    const newServices = [...services];
    newServices[index] = updated;
    setServices(newServices);
  };
  const deleteService = (index) => {
    const newServices = services.filter((_, i) => i !== index);
    setServices(newServices);
  };

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  return (
    <ServicesContext.Provider
      value={{ services, addService, updateService, deleteService }}
    >
      {children}
    </ServicesContext.Provider>
  );
}
