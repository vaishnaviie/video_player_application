import { useEffect, useRef, useState } from "react";
import { categories } from "../data/data.json";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Hamburger from "../svg/Hamburger";
import ProfileIcon from "../svg/ProfileIcon";
import CloseIcon from "../svg/CloseIcon";
import { useData } from "../context/DataContext";

const Home = () => {
  const { allData } = useData();
  const [data, setdata] = useState(allData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="sticky top-0  bg-background">
        <div className="flex items-center justify-between px-2 border border-b-secondary-gray ">
          <img className="h-12 w-12" src={logo} alt="logo" />

          <input
            type="search"
            className=" outline-0 pl-2 border border-white p-1 rounded-full text-text-white font-semibold md:w-[30%] "
          />
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <CloseIcon /> : <Hamburger />}
          </button>
          <ProfileIcon />
        </div>
        <ul className=" flex overflow-x-scroll whitespace-nowrap scrollbar-hide gap-4 p-2 w-full border border-b-secondary-gray ">
          <li className="font-roboto text-sm border border-accent p-1  rounded-sm bg-card text-text-white font-semibold ">
            All
          </li>
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

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div
            ref={menuRef}
            className="absolute right-0 top-0 h-full w-[80%] bg-background shadow-lg transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between p-4 border-b border-secondary-gray">
              <span className="text-text-white font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            //---------- Mobile Category List-------
            <div className="p-4">
              <h3 className="text-text-white font-bold mb-4">Categories</h3>
              {/* <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category.category.slug}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeCategory === category.category.slug
                        ? "bg-accent text-white"
                        : "bg-card text-text-white hover:bg-gray-800"
                    }`}
                    onClick={() => handleCategoryClick(category.category)}
                  >
                    <span className="font-medium">
                      {category.category.name}
                    </span>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      )}

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
