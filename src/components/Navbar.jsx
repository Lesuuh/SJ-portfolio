import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
// import halfBackground from "../assets/images/nav-background.png";
import { Button } from "./Button";
import "../assets/css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(true);
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   if (window.scrollY > 50) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // });

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const showButton = () => {
    window.innerWidth <= 967 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={`navbar ${scroll ? "scroll" : ""}`}>
        {/* <div className="halfbackground">
          <img src={halfBackground} alt="background" />
        </div> */}
        <div className="nav-container">
          <div className="nav-logo">
            <Link className="nav-logo-link" to="/" onClick={handleClose}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={menuClick}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="fa-times" />
            ) : (
              <FontAwesomeIcon icon={faBars} clasName="fa-bars" />
            )}
          </div>
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li className="nav-links">
              <Link to="/About" className="nav-links" onClick={handleClose}>
                About
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/Services" className="nav-links" onClick={handleClose}>
                Services
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/Blog" className="nav-links" onClick={handleClose}>
                Portfolio
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/Blog" className="nav-links" onClick={handleClose}>
                Blog
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
              Lets Talk
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};
