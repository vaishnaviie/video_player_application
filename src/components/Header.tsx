import CloseIcon from "../svg/CloseIcon";
import Hamburger from "../svg/Hamburger";
import ProfileIcon from "../svg/ProfileIcon";
import logo from "../assets/logo.png";
import { useData } from "../context/DataContext";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useData();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-2 border border-b-secondary-gray  ">
      <img
        onClick={() => navigate("/")}
        className="h-12 w-12"
        src={logo}
        alt="logo"
      />

      <Search />

      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <CloseIcon /> : <Hamburger />}
      </button>
      <ProfileIcon />
    </div>
  );
};

export default Header;
