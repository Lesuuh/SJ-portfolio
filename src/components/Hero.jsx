import "../assets/css/Hero.css";
import heroImage from "../assets/images/hero-image.png"
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-wrapper-one">
          <p>UX Designer</p>
          <h1 className="tagline">Hi There, <span className="accent">I’m Sarah Jones</span></h1>
          <p className="welcome-message">Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
          <div className="hero-btns">
            <Button buttonStyle="btn--primary" buttonSize="btn--large">Hire Me</Button>
            <Button buttonStyle="btn--secondary" buttonSize="btn--large">Portfolio</Button>
          </div>
        </div>
        <div className="hero-wrapper-two">
            <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};
