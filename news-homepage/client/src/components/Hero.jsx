import HeroImage from "../assets/images/image-web-3-desktop.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__section">
      <div className="hero__image-container">
        <img
          className="hero__image"
          src={HeroImage}
          alt="Image of the bright future of Web 3.0"
        />
      </div>
      <div className="hero__article">
        <h1 className="hero__title">
          The Bright <br /> Future of Web 3.0?
        </h1>
        <div className="hero__information">
          <p className="hero__description">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="hero__btn">read more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
