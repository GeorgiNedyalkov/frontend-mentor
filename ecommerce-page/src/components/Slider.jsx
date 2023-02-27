import { useState } from "react";
import Product1 from "../assets/images/image-product-1.jpg";
import NextIcon from "../assets/images/icon-next.svg";
import PrevIcon from "../assets/images/icon-previous.svg";
import "./Slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="slider__image-container">
        <img
          onClick={() => setIndex(index + 1)}
          className="prev_icon"
          src={PrevIcon}
          alt=""
        />
        <img className="slider__image" src={Product1} alt="" />
        <img
          onClick={() => setIndex(index + 1)}
          className="next_icon"
          src={NextIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
