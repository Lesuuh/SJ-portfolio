import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../assets/css/Design.css";

export const Design = () => {
  const designData = [
    {
      id: 1,
      img: "/src/assets/images/Image-7.png",
      date: "August 15, 2023 / UX",
      title: "Typography Tips for Design Success",
      text: "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.",
    },
    {
      id: 2,
      img: "/src/assets/images/Image-8.png",
      date: "September 15, 2023 / UX",
      title: "Color Psychology in UX",
      text: "Explore how color choices impact user emotions and decision-making in UX design.",
    },
    {
      id: 3,
      img: "/src/assets/images/Image-9.png",
      date: "November 5, 2023 / UX",
      title: "Boosting UX with Microinteractions",
      text: "Discover the power of microinteractions in enhancing user experience and engagement.",
    },
  ];
  return (
    <div className="design">
      <div className="design-container">
        <div className="design-header">
          <h1>Design Insights and Inspiration</h1>
          <p>
            Discover industry insights, expert tips, and design inspiration.
            Stay updated with the latest trends in web design and user
            experience.
          </p>
        </div>

        <div className="design-wrapper">
          {designData.map((data) => {
            return (
              <Link to="/lesuuh" className="design-card-link" key={data.id}>
                <div className="card-img">
                  <img src={data.img} alt="img" />
                </div>
                <div className="card-body">
                  <small>{data.date}</small>
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                  <h6>
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
