import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const ShowSuggestions = ({ filteredData }) => {
  const navigate = useNavigate();
  const { setSearchInput, searchInput } = useData();
  const suggestionsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSearchInput("");
      }
    };

    // Bind listener on mount, remove on unmount
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchInput]);

  const highlightText = (text, search) => {
    if (!search || !text) return text;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="text-green-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  if (!searchInput || searchInput.trim() === "") return null;

  return (
    <ul
      ref={suggestionsRef}
      className="absolute left-0 md:left-[-35%] rounded-lg w-full md:w-[170%] bg-secondary-gray z-50 shadow-xl overflow-hidden"
    >
      {filteredData.length > 0 ? (
        filteredData.slice(0, 10).map((data, index) => (
          <li
            key={data.id || index}
            className="border-b border-background px-4 py-2 cursor-pointer text-text-white hover:bg-white/10 transition-colors"
            onClick={() => {
              navigate(`/video/${data.slug}`);
              setSearchInput("");
            }}
          >
            {highlightText(data.title, searchInput)}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-accent bg-background/50">
          No data found
        </li>
      )}
    </ul>
  );
};

export default ShowSuggestions;
