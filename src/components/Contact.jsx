import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Contact.css";
import { ContactForm } from "./ContactForm";
import background from "/src/assets/images/Background-1.png";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { faDribbble, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-background">
        <img src={background} alt="background" />
      </div>
      <div className="contact-container">
        <div className="left-wrapper">
          <h1>Get in Touch</h1>
          <p>
            Have a question or a project in mind? I'd love to hear from you.
            Let's chat and make something amazing together.
          </p>
          <div className="contact-detail">
            <div className="number">
              <FontAwesomeIcon icon={faPhone} />
              <p> +1205 5872 321</p>
            </div>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} />
              <p> contact@sarajonesdesign.com</p>
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faLocationPin} />
              <p>
                1234 Design Street,Creativeville, Webland,Imaginary State, 98765
              </p>
            </div>
          </div>
          <div className="social-icons">
            <Link to="/" className="sm-icon"><FontAwesomeIcon icon={faInstagram} className="fa-icon"/></Link>
            <Link to="/" className="sm-icon"><FontAwesomeIcon icon={faTwitter} className="fa-icon"/></Link>
            <Link to="/" className="sm-icon"><FontAwesomeIcon icon={faDribbble} className="fa-icon"/></Link>
            <Link to="/" className="sm-icon"><FontAwesomeIcon icon={faFacebook} className="fa-icon"/></Link>
          </div>
        </div>
        <div className="right-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
