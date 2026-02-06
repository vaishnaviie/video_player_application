import { useEffect } from "react";
import { useData } from "../context/DataContext";
import CloseIcon from "../svg/CloseIcon";

const MobileView = () => {
  const { isMenuOpen, setIsMenuOpen, menuRef } = useData();

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
    <>
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
    </>
  );
};

export default MobileView;
