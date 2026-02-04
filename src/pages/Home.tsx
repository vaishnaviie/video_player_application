import { useState } from "react";
import { categories } from "../data/data.json";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Hamburger from "../svg/Hamburger";
import SearchIcon from "../svg/SearchIcon";
import ProfileIcon from "../svg/ProfileIcon";

const Home = () => {
  const [data, setdata] = useState(categories[0].contents);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="sticky top-0  bg-background">
        <div className="flex items-center justify-between px-2 border border-b-secondary-gray ">
          <img className="h-12 w-12" src={logo} alt="logo" />

          <input
            type="search"
            className=" outline-0 pl-2 border border-white p-1 rounded-full text-text-white font-semibold md:w-[30%] "
          />

          <Hamburger />
          <ProfileIcon />
        </div>
        <ul className=" flex justify-center gap-4 py-2 w-full border border-b-secondary-gray ">
          {categories.map((category) => (
            <li
              key={category.category.slug}
              className="font-roboto text-sm border border-accent p-1  rounded-sm bg-card text-text-white font-semibold "
            >
              {category?.category?.name}
            </li>
          ))}
        </ul>
      </div>

      <ol className=" flex flex-col md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4 pt-2   ">
        {data.map((category) => (
          <div className="mb-3" key={category?.slug}>
            <img
              className=" w-[90%] h-[150px] md:h-[200px] lg:h-[250px] mx-4  rounded-md object-cover object-[50%_20%]"
              src={category?.thumbnailUrl}
              alt={category?.thumbnailUrl}
              onClick={() => navigate(`/video/${category?.slug}`)}
            />

            <div className="flex gap-2 items-center p-2 mx-4">
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
