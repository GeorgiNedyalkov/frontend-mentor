import { BsFillMoonFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Where in the world?</h1>
        <p className="header__theme">
          <BsFillMoonFill />
          Dark mode
        </p>
      </div>
    </div>
  );
};

export default Header;
