import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import halfBackground from "../assets/images/nav-background.png";
import { Button } from "./Button";
import "../assets/css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="halfbackground">
          <img src={halfBackground} alt="background" />
        </div>
        <div className="nav-container">
          <div className="nav-logo">
            <Link className="nav-logo-link" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-links">
              <Link to="/" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/" className="nav-links">
                Portfolio
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/" className="nav-links">
                Blog
              </Link>
            </li>
          </ul>
          <Button buttonStyle="btn--primary" buttonSize="btn--medium">Lets Talk</Button>
        </div>
      </nav>
    </>
  );
};
