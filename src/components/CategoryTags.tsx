import { useData } from "../context/DataContext";

const CategoryTags = () => {
  const { setCategoryTag, categories } = useData();
  return (
    <ul className=" flex overflow-x-scroll whitespace-nowrap scrollbar-hide hide-scrollbar gap-4 p-2 w-full border border-b-secondary-gray ">
      <li
        className="font-roboto text-sm border border-accent p-1  rounded-sm bg-card text-text-white font-semibold "
        onClick={() => setCategoryTag("All")}
      >
        All
      </li>
      {categories.map((category) => (
        <li
          key={category.category.slug}
          className="font-roboto text-sm border border-accent p-1  rounded-sm bg-card text-text-white font-semibold "
          onClick={() => setCategoryTag(category.category.name)}
        >
          {category?.category?.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTags;
