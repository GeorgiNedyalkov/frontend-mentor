import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className="header">
      <div className="right">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: 23,004</p>
      </div>
      <hr />
      <div className="left">
        <p>Dark Mode</p>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
