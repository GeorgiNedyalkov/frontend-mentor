import React from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img className="logo__image" src={Logo} alt="" />
      </div>

      <nav>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar__list-item">
            <a href="/new">New</a>
          </li>
          <li className="navbar__list-item">
            <a href="/popular">Popular</a>
          </li>
          <li className="navbar__list-item">
            <a href="trending">Trending</a>
          </li>
          <li className="navbar__list-item">
            <a href="categories">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
