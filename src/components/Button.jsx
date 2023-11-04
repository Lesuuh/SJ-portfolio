import { Link } from "react-router-dom";
import "../assets/css/Button.css"

const STYLES = ["btn--primary", "btn--secondary"];
const SIZES = ["btn--large", "btn--medium"];

export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  buttonStyle,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/" className="btn">
      <button
        className={`${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};
