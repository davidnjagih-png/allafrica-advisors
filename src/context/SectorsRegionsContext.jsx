import React, { createContext, useState, useEffect } from "react";

export const SectorsRegionsContext = createContext();

export function SectorsRegionsProvider({ children }) {
  const [sectorsRegions, setSectorsRegions] = useState(() => {
    const saved = localStorage.getItem("sectorsRegions");
    return saved
      ? JSON.parse(saved)
      : [
          {
            sector: "Energy",
            region: "West Africa",
            description: "Advisory on oil & gas projects.",
            image: "/images/energy.jpg",
          },
        ];
  });

  const addItem = (item) => setSectorsRegions((prev) => [...prev, item]);
  const updateItem = (index, updated) => {
    const newItems = [...sectorsRegions];
    newItems[index] = updated;
    setSectorsRegions(newItems);
  };
  const deleteItem = (index) => {
    const newItems = sectorsRegions.filter((_, i) => i !== index);
    setSectorsRegions(newItems);
  };

  useEffect(() => {
    localStorage.setItem("sectorsRegions", JSON.stringify(sectorsRegions));
  }, [sectorsRegions]);

  return (
    <SectorsRegionsContext.Provider
      value={{ sectorsRegions, addItem, updateItem, deleteItem }}
    >
      {children}
    </SectorsRegionsContext.Provider>
  );
}
