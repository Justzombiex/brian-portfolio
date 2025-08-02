import "./toggle.css";
import Sun from "../../img/sun.svg";
import Moon from "../../img/moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div
      className="t"
      style={{
        backgroundColor: theme.state.darkMode ? "#26266c" : "#f0f0f0",
      }}
    >
      <img src={Sun} alt="sun" className="t-icon" />
      <img src={Moon} alt="moon" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? 0 : 25,
        }}
      ></div>
    </div>
  );
};

export default Toggle;
