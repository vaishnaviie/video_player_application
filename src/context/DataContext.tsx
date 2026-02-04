import { createContext, useContext, useState, ReactNode } from "react";
import { categories } from "../data/data.json";

const DataContext = createContext(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const allData = categories.map((category) => category.contents).flat(2);
  return (
    <DataContext.Provider value={{ allData: allData }}>
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useVideo must be used within a VideoProvider");
  return context;
};
