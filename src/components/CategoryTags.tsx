import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const CategoryTags = () => {
  const { setCategoryTag, categories, categoryTag } = useData();
  const navigate = useNavigate();
  return (
    <ul className=" flex overflow-x-scroll whitespace-nowrap scrollbar-hide hide-scrollbar gap-4 p-2 w-full border border-b-secondary-gray ">
      <li
        className={`font-roboto text-sm border border-green-700 px-4 py-2.5 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
          categoryTag === "All"
            ? "bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/30"
            : "bg-card text-text-white font-semibold hover:shadow-lg hover:shadow-green-500/20 hover:bg-green-700/10"
        }`}
        onClick={() => {
          setCategoryTag("All");
          navigate("/");
        }}
      >
        All
      </li>
      {[...categories].reverse().map((category) => (
        <li
          key={category.category.slug}
          className={`font-roboto text-sm border border-green-700 px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            categoryTag === category.category.name
              ? "bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/30"
              : "bg-card text-text-white font-semibold hover:shadow-lg hover:shadow-green-500/20 hover:bg-green-700/10"
          }`}
          onClick={() => {
            setCategoryTag(category.category.name);
            navigate("/");
          }}
        >
          {category?.category?.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTags;
