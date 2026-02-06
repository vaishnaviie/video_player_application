import { useSearch } from "../hook/useSearch";
import ShowSuggestions from "./ShowSuggestions";
import { useData } from "../context/DataContext";

const Search = () => {
  const { setSearchInput, searchInput } = useData();
  const { filteredData } = useSearch(searchInput);
  console.log("filteredData in search", filteredData);
  return (
    <div className="relative">
      <input
        type="search"
        value={searchInput}
        className=" outline-0 pl-2 border border-white p-1 rounded-full text-text-white font-semibold "
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {searchInput && filteredData && filteredData.length >= 0 && (
        <ShowSuggestions filteredData={filteredData} />
      )}
    </div>
  );
};

export default Search;
