import "../assets/css/Services.css";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  const cardData = [
    {
      id: 1,
      icon: "/src/assets/images/design-icon.png",
      title: "Design",
      text: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
    },
    {
      id: 2,
      icon: "/src/assets/images/branding-icon.png",
      title: "Branding",
      text: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
    },
    {
      id: 3,
      icon: "/src/assets/images/ux-icon.svg",
      title: "UX Research",
      text: "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
    },
    {
      id: 4,
      icon: "/src/assets/images/testing-icon.png",
      title: "Usability Testing",
      text: "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
    },
  ];

  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h1>Services</h1>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
        <div className="services-wrapper">
          {cardData.map((card) => (
            <ServicesCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
