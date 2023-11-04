import aboutBackground from "../assets/images/about-background.png";
import "../assets/css/About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h3>About Me</h3>
        <p>
          I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
          visually stunning digital experiences. With a passion for user-centric
          design, I transform ideas into functional and beautiful interfaces.
          Let's collaborate and shape the future of design together.
        </p>
        <div className="about-wrapper">
          <div className="wrapper-box">
            <h3>502</h3>
            <p>Projects Done</p>
          </div>
          <div className="wrapper-box">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="wrapper-box">
            <h3>273+</h3>
            <p>Clients Served</p>
          </div>
        </div>
        <div>
          <img src={aboutBackground} alt="" className="about-img" />
        </div>
      </div>
    </div>
  );
};
