import { BsFillMoonFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Where in the world?</h1>
      <p className="header__theme">
        <BsFillMoonFill />
        Dark mode
      </p>
    </div>
  );
};

export default Header;
