// import "../assets/css/Portfolio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const PortfolioCard = ({ img, title, subtitle, link}) => {
  return (
    <Link to={link} className="portfolio-card-link">
      <div className="portfolio-card">
        <div>
          <img src={img} alt="card-img" />
        </div>
        <div className="portfolio-card-body">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
          <div className="icon">
            <FontAwesomeIcon icon={faArrowUp} className="icon-img" />
          </div>
        </div>
      </div>
    </Link>
  );
};
