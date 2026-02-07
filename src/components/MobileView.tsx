import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import CloseIcon from "../svg/CloseIcon";
import { useNavigate } from "react-router-dom";

const MobileView = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    menuRef,
    categories,
    setCategoryTag,
    categoryTag,
  } = useData();

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true);
      setIsClosing(false);
      document.body.style.overflow = "hidden";
    } else {
      if (isVisible) {
        setIsClosing(true);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "auto";
        }, 300);
      }
    }
  }, [isMenuOpen, isVisible]);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const handleTagClick = (tagName: string) => {
    setCategoryTag(tagName);
    handleClose();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  if (!isVisible && !isMenuOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black md:hidden transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-50"
        } ${isVisible ? "visible" : "invisible"}`}
        onClick={handleClose}
      />

      <div
        ref={menuRef}
        className={`fixed right-0 top-0 h-full w-[80%] bg-background shadow-lg z-50 md:hidden transition-all duration-300 ease-out ${
          isClosing ? "translate-x-full" : "translate-x-0"
        } ${isVisible ? "visible" : "invisible"}`}
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between p-4 border-b border-secondary-gray ">
          <span className="text-text-white font-bold text-lg">Menu</span>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-800 rounded transition-colors duration-200"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 h-[calc(100vh-80px)] overflow-y-auto">
          <h3 className="text-text-white font-bold mb-4 px-2">Categories</h3>

          <div
            className={`font-roboto text-sm border border-green-700 px-4 py-3 mb-3 rounded-full transition-all duration-300 cursor-pointer ${
              categoryTag === "All"
                ? "bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/30"
                : "bg-card text-text-white font-semibold hover:shadow-lg hover:shadow-green-500/20 hover:bg-green-700/10"
            } active:scale-95`}
            onClick={() => handleTagClick("All")}
          >
            All
          </div>

          {[...categories].reverse().map((category, index) => (
            <div
              key={category.category.slug}
              className={`font-roboto text-sm border border-green-700 px-4 py-3 mb-3 rounded-full transition-all duration-300 cursor-pointer ${
                categoryTag === category.category.name
                  ? "bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/30"
                  : "bg-card text-text-white font-semibold hover:shadow-lg hover:shadow-green-500/20 hover:bg-green-700/10"
              } active:scale-95`}
              style={{
                transitionDelay: `${index * 30}ms`, // Staggered animation
              }}
              onClick={() => handleTagClick(category.category.name)}
            >
              {category?.category?.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileView;
