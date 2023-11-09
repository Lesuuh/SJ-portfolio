import "../assets/css/Portfolio.css";
import { PortfolioCard } from "./PortfolioCard";


export const Portfolio = () => {
  const cardData = [
    {
      id: 1,
      img: "images/Image.png",
      title: "Educational Platform",
      subtitle: "Web Design / Usability Testing",
      link: "educationalplatform"
    },
    {
      id: 2,
      img: "images/Image-1.png",
      title: "Travel Journal",
      subtitle: "UX Research / App Design ",
      link: "traveljournal"
    },
    {
      id: 3,
      img: "images/Image-2.png",
      title: "Personal Page",
      subtitle: "Web Design",
      link: "personalpage"
    },
    {
      id: 4,
      img: "images/Image-3.png",
      title: "Furniture Mobile App",
      subtitle: "App Design",
      link: "furnituremobileapp"
    },
    {
      id: 5,
      img: "images/Image-4.png",
      title: "Coffe House Landing Page",
      subtitle: "Web Design / Usability Testing",
      link: "coffeehouse"
    },
    {
      id: 6,
      img: "images/Image-5.png",
      title: "Home Services Page",
      subtitle: "Web Design / Marketing",
      link: "homeservices"
    },
  ];
  return (
    <div className="portfolio">
      <div className="background"></div>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>My Portfolio</h1>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
        <div className="card-wrapper">
        {cardData.map((card) => (
          <PortfolioCard
            key={card.id}
            img={card.img}
            title={card.title}
            link={card.link}
            subtitle={card.subtitle}
          />
        ))}
      </div>
      </div>

      
    </div>
  );
};
