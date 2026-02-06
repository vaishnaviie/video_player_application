import { createContext, useContext, useState, ReactNode, useRef } from "react";
import { categories } from "../data/data.json";
import { useDataa } from "../hook/useData";

const DataContext = createContext(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categoryTag, setCategoryTag] = useState("All");
  const { tagData } = useDataa(categoryTag);
  const [data, setData] = useState(tagData);
  const menuRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

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
