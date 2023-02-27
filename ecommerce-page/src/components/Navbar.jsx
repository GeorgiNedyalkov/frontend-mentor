import { useState } from "react";
import CartIcon from "../assets/images/icon-cart.svg";
import Menu from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <div className="navbar__menu-container">
          <img className="navbar__menu" src={Menu} alt="navbar menu" />
        </div>
        <div className="navbar__logo-container">
          <img className="navbar__logo" src={Logo} alt="Sneakers logo" />
        </div>
        <nav>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <a href="/collections">Collections</a>
            </li>
            <li className="navbar__list-item">
              <a href="/men">Men</a>
            </li>
            <li className="navbar__list-item">
              <a href="/women">Women</a>
            </li>
            <li className="navbar__list-item">
              <a href="/about">About</a>
            </li>
            <li className="navbar__list-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar__right">
        <div className="navbar__cart-container">
          <img className="navbar__cart" src={CartIcon} alt="cart icon" />
        </div>
        <div className="navbar__avatar-container">
          <img className="navbar__avatar" src={Avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
