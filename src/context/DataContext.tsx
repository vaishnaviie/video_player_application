import { createContext, useContext, useState, useRef } from "react";
import { categories } from "../data/data.json";
import { useDataa } from "../hook/useData";
import type { DataContextType, DataProviderProps } from "../type/type";

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: DataProviderProps }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categoryTag, setCategoryTag] = useState("All");
  const { tagData } = useDataa(categoryTag);
  const [data, setData] = useState(tagData);
  const menuRef = useRef<HTMLElement>(null);
  const [searchInput, setSearchInput] = useState("");
  console.log("tagData", tagData);
  return (
    <DataContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        categoryTag,
        setCategoryTag,
        categories,
        tagData,
        menuRef,
        data,
        setData,
        searchInput,
        setSearchInput,
      }}
    >
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
