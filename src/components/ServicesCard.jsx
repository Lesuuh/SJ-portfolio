export const ServicesCard = ({ icon, title, text }) => {
  return (
    <div className="servicescard">
      <div className="card--icon">
        <img src={icon} alt="icon" />
      </div>
      <h2 className="card--title">{title}</h2>
      <p className="card--text">{text}</p>
    </div>
  );
};
