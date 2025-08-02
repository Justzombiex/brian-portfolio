import "./product.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Product = ({ img, link }) => {
   const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`p ${darkMode ? "p-dark" : "p-light"}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
