import { useState } from "react";
import { categories } from "../data/data.json";

const Home = () => {
  const [data, setdata] = useState(categories[0].contents);
  return (
    <div>
      <ul className=" flex justify-center gap-4">
        {categories.map((category) => (
          <li
            key={category.category.slug}
            className="font-roboto text-sm border border-accent p-1 rounded-sm bg-card text-text-white font-semibold "
          >
            {category?.category?.name}
          </li>
        ))}
      </ul>

      <ol className=" flex flex-col  ">
        {data.map((category) => (
          <li className="mb-3">
            <iframe
              width="100%"
              height="200px"
              className=" object-contain"
              src={category?.mediaUrl}
            ></iframe>

            <div className=" flex gap-2 items-center p-2">
              <img
                className=" h-8 w-8 rounded-full object-cover"
                src={category.thumbnailUrl}
                alt={category.thumbnailUrl}
              />
              <p className=" text-text-white ">{category.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
