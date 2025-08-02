import "./contact.css";
import Linkedin from "../../img/linkedin.svg";
import gmail from "../../img/gmail.svg";
import map from "../../img/map.svg";
import phone from "../../img/phone.svg";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Github from "../../img/github.svg";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g9hv03q",
        "template_sa8ple7",
        formRef.current,
        "F7M9IZfavEec8egYK"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg" style={{backgroundColor: darkMode && "#c9a0dc",}}></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title" style={{color: darkMode && "#c9a0dc",}}>¿Quieres contactarme?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="Aquí va un ícono" className="c-icon" />
              +53 54411276
            </div>
            <div className="c-info-item">
              <img src={gmail} alt="Aquí va un ícono" className="c-icon" />
              -bmoralescutting@gmail.com
            </div>
            <div className="c-info-item">
              <img src={map} alt="Aquí va un ícono" className="c-icon" />
              -Actualmente en La Habana
            </div>
            <div className="c-info-item">
              <img src={Linkedin} alt="Aquí va un ícono" className="c-icon" />
              <a
                href="https://www.linkedin.com/in/brian-michel-morales-cutting/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link"
              >
                -Visita mi LinkedIn
              </a>
            </div>
            <div className="c-info-item">
              <img src={Github} alt="GitHub icon" className="c-icon" />
              <a
                href="https://github.com/Justzombiex"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link"
              >
                -Visita mi GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b style={{color: darkMode && "#c9a0dc",}}>¿Tienes alguna pregunta?</b> No dudes en contactarme por correo
            electrónico rellenandi el siguiente formulario
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Nombre"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Asunto"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Correo electrónico"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows={5}
              placeholder="Mensaje"
              name="message"
              required
            />
            <button style={{backgroundColor: darkMode && "#c9a0dc",}}>Enviar</button>
            {done && "Mensaje enviado con éxito"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
