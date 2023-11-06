import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* <div className="footer-header">
          <Link to="/about" className="footer-links">About</Link>
          <Link to="/services" className="footer-links">Services</Link>
          <Link to="/home">
            <img src={logo} alt="logo-image" />
          </Link>
          <Link to="/portfolio" className="footer-links">Portfolio</Link>
          <Link to="/blog" className="footer-links">Blog</Link>
        </div> */}
        <div className="footer-social-media">
          <p>Follow me on social media:</p>
          <div className="social-icons">
            <Link to="/" className="s-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/" className="s-icon"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to="/" className="s-icon"><FontAwesomeIcon icon={faDribbble} /></Link>
            <Link to="/" className="s-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
