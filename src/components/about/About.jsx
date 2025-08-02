import "./about.css";
import Avatar from "../../img/Avatar.png";
import Cs from "../../img/cs.svg";
import Net from "../../img/dotnet.svg";
import Html from "../../img/html.svg";
import Css from "../../img/css.svg";
import ReactLogo from "../../img/react.svg";
import Postgres from "../../img/postgresql.svg";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { FaUsers, FaComments, FaLightbulb, FaTools } from "react-icons/fa";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Avatar}
            alt="Figurita de acción de Brian"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title" style={{color: darkMode && "#c9a0dc",}}>Acerca de mí</h1>
        <p className="a-sub">
          Me gusta construir aplicaciones que funcionen bien, se vean limpias y
          resuelvan problemas reales.
        </p>
        <p className="a-desc">
          Empecé trabajando con sistemas automatizados y protocolos
          industriales, programando en C# para crear soluciones funcionales. Hoy
          aplico ese mismo enfoque al desarrollo de software, tanto en backend
          como en frontend con React. Me gusta escribir código limpio, modular y
          fácil de entender, y siempre estoy aprendiendo nuevas tecnologías.
          Actualmente estoy enfocado en React y explorando buenas prácticas en
          diseño de interfaces y desarrollo web.
        </p>

        {/* Habilidades técnicas */}
        <div className="a-skills">
          <h3 style={{color: darkMode && "#c9a0dc",}}>Habilidades técnicas</h3>
          <div className="a-icons-row">
            <img src={Cs} alt="C#" title="C#" className="a-tech-icon" />
            <img src={Net} alt=".NET" title=".NET" className="a-tech-icon" />
            <img src={Html} alt="HTML" title="HTML" className="a-tech-icon" />
            <img src={Css} alt="CSS" title="CSS" className="a-tech-icon" />
            <img
              src={ReactLogo}
              alt="React"
              title="React"
              className="a-tech-icon"
            />
            <img
              src={Postgres}
              alt="PostgreSQL"
              title="PostgreSQL"
              className="a-tech-icon"
            />
          </div>
        </div>

        {/* Habilidades blandas */}
        <div className="a-softskills">
          <h3 style={{color: darkMode && "#c9a0dc",}}>Habilidades blandas</h3>
          <ul className="a-softskills-list">
            <li>
              <FaComments style={{ color: "#6c63ff", marginRight: "8px" }} />{" "}
              Comunicación efectiva
            </li>
            <li>
              <FaUsers style={{ color: "#4db5ff", marginRight: "8px" }} />{" "}
              Trabajo en equipo
            </li>
            <li>
              <FaLightbulb style={{ color: "#ffd700", marginRight: "8px" }} />{" "}
              Adaptabilidad
            </li>
            <li>
              <FaTools style={{ color: "#ff6f61", marginRight: "8px" }} />
              Resolución de problemas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
