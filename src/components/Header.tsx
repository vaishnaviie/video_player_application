import CloseIcon from "../svg/CloseIcon";
import Hamburger from "../svg/Hamburger";
import ProfileIcon from "../svg/ProfileIcon";
import logo from "../assets/logo.png";
import { useData } from "../context/DataContext";
import Search from "./Search";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useData();

  // console.log("filtereadData", filtereadData);
  return (
    <div className="flex items-center justify-between px-2 border border-b-secondary-gray  ">
      <img className="h-12 w-12" src={logo} alt="logo" />

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
