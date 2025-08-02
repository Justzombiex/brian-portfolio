import "./intro.css";
import Me from "../../img/BrianPic.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola mi nombre es </h2>
          <h2 className="i-name">Brian Michel</h2>
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
        <div className="i-bg">
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
