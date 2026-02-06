import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const ShowSuggestions = ({ filteredData }) => {
  const navigate = useNavigate();
  const { setSearchInput } = useData();
  return (
    <ul className=" absolute md:left-[-35%] rounded-lg w-full md:w-[170%] bg-secondary-gray">
      {console.log("filtereadData", filteredData)}
      {filteredData.length > 0 ? (
        filteredData?.map((data) => (
          <li
            className="border border-background px-2 py-1 cursor-pointer text-text-white"
            onClick={() => {
              navigate(`/video/${data.slug}`);
              setSearchInput("");
            }}
          >
            {data.title}
          </li>
        ))
      ) : (
        <p className="border border-background px-2 py-1 text-accent">
          No data found
        </p>
      )}
    </ul>
  );
};

export default ShowSuggestions;
