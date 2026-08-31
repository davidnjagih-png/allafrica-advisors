import React, { createContext, useState, useEffect } from "react";

export const RegionsContext = createContext();

export function RegionsProvider({ children }) {
  const [regions, setRegions] = useState(() => {
    const saved = localStorage.getItem("regions");
    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "Kenya",
            description: "East African hub for media and advisory.",
            image: "/images/kenya.jpg",
          },
          {
            name: "Nigeria",
            description: "West African powerhouse in energy and finance.",
            image: "/images/nigeria.jpg",
          },
        ];
  });

  const addRegion = (region) => setRegions((prev) => [...prev, region]);
  const updateRegion = (index, updated) => {
    const newRegions = [...regions];
    newRegions[index] = updated;
    setRegions(newRegions);
  };
  const deleteRegion = (index) => {
    const newRegions = regions.filter((_, i) => i !== index);
    setRegions(newRegions);
  };

  useEffect(() => {
    localStorage.setItem("regions", JSON.stringify(regions));
  }, [regions]);

  return (
    <RegionsContext.Provider
      value={{ regions, addRegion, updateRegion, deleteRegion }}
    >
      {children}
    </RegionsContext.Provider>
  );
}
