import "./intro.css";
import Me from "../../img/BrianPic.png";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola mi nombre es </h2>
          <h2
            className="i-name"
            style={{ color: darkMode ? "#c9a0dc" : "#59b256" }}
          >
            Brian Michel
          </h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Ingeniero en Automática</div>
            </div>
          </div>
          <p className="i-desc">
            Ingeniero Automático especializado en desarrollo de software
            industrial, con experiencia en programación en{" "}
            <strong className="net">.NET (C#)</strong> e integración de equipos
            mediante Modbus TCP, MQTT y Profinet. Actualmente enfocado en el
            desarrollo frontend, creando interfaces modernas y responsivas con{" "}
            <strong className="react">React</strong>,{" "}
            <strong className="html">HTML</strong> y{" "}
            <strong className="css">CSS</strong>. Comprometido con el
            aprendizaje continuo para ofrecer soluciones tecnológicas
            integrales.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div
          className="i-bg"
          style={{ backgroundColor: darkMode && "#c9a0dc" }}
        >
          {" "}
          <img
            src={Me}
            alt="Brian Michel - Ingeniero en Automática"
            className="i-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
