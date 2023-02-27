import { useState } from "react";
import Slider from "./Slider";
import CartIcon from "../assets/images/icon-cart.svg";
import "./Hero.css";

const Hero = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Slider />
      <main className="hero__section">
        {/* Slider */}
        {/* product info */}
        <h2 className="product__company">Sneaker Company</h2>
        <h1 className="product__title">Fall Limited Edition Sneakers</h1>
        <p className="product__description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="product__price-container">
          <div className="product__price-container-left">
            <p className="product__price">$125.00</p>
            <p className="product__discount">50%</p>
          </div>
          <p className="product__previous_price">$250.00</p>
        </div>
        <div className="add_to_cart">
          <button
            onClick={() => setCount(count - 1)}
            className="add_remove_button"
          >
            -
          </button>
          <span className="product__count">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="add_remove_button"
          >
            +
          </button>
        </div>
        <button className="add_to_cart_button">Add to cart</button>
      </main>
    </>
  );
};

export default Hero;
