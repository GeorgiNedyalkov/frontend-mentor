import "./Header.css";

const Header = ({ count }) => {
  return (
    <header className="header">
      <div className="header__left">
        <h1>Notifications</h1>
        <div className="notification__count">{count}</div>
      </div>
      <div className="header__right">
        <p className="mark-all">Mark all as read</p>
      </div>
    </header>
  );
};

export default Header;
