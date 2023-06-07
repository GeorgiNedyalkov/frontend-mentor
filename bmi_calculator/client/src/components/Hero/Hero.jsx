import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__logo_container">
        <Logo className="hero__logo" />
      </div>
      <h1 className="hero__title">Body Mass Index Calculator</h1>
      <p className="hero__copy">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </header>
  );
};

export default Hero;
