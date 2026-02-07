import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import type { ShowSuggestionsProps } from "../type/type";
import { highlightText } from "../util/util";

const ShowSuggestions = ({ filteredData }: ShowSuggestionsProps) => {
  const { setSearchInput, searchInput } = useData();
  const navigate = useNavigate();
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setSearchInput("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchInput]);

  if (!searchInput || searchInput.trim() === "") return null;

  return (
    <ul
      ref={suggestionsRef}
      className="absolute left-0 md:left-[-35%] rounded-lg w-full md:w-[170%] bg-secondary-gray z-50 shadow-xl overflow-hidden"
    >
      {filteredData.length > 0 ? (
        filteredData.slice(0, 10).map((data, index) => (
          <li
            key={data.slug || index}
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
