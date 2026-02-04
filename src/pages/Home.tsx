import { useState } from "react";
import { categories } from "../data/data.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState(categories[0].contents);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <ul className="fixed flex justify-center gap-4 bg-background pb-2 w-full">
        {categories.map((category) => (
          <li
            key={category.category.slug}
            className="font-roboto text-sm border border-accent p-1 rounded-sm bg-card text-text-white font-semibold "
          >
            {category?.category?.name}
          </li>
        ))}
      </ul>

      <ol className=" flex flex-col md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4 pt-12   ">
        {data.map((category) => (
          <div className="mb-3" key={category?.slug}>
            <img
              className=" w-[90%] h-[150px] md:h-[200px] lg:h-[250px] mx-4  rounded-md object-cover object-[50%_20%]"
              src={category?.thumbnailUrl}
              alt={category?.thumbnailUrl}
              onClick={() => navigate(`/video/${category?.slug}`)}
            />

            <div className="flex gap-2 items-center p-2">
              <img
                className=" h-8 w-8 rounded-full object-cover"
                src={category.thumbnailUrl}
                alt={category.thumbnailUrl}
              />
              <p className=" text-text-white font-bold ">{category.title}</p>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Home;
