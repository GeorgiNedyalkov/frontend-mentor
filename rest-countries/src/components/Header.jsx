import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Where in the world?</h1>
      <FontAwesomeIcon icon="fa-solid fa-moon" />
      <p>Dark mode</p>
    </div>
  );
};

export default Header;
