import "../assets/css/ProgressBar.css";

export const ProgressBar = ({ name, percentage }) => {
  return (
    <>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
        <h4>{name}</h4>
        <p>{percentage}%</p>
      </div>
    </>
  );
};
