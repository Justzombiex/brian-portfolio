import Product from "../product/Product";
import "./productList.css";
import { certifications } from "../../certificationsData";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ProductList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title" style={{ color: darkMode ? "#c9a0dc" : "#59b256" }}>Mis Certificaciones</h1>
        <p className="pl-desc">
          Aquí puedes ver algunas de las certificaciones que he obtenido como
          desarrollador. Haz clic para verlas directamente.
        </p>
      </div>
      <div className="pl-list">
        {certifications.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
