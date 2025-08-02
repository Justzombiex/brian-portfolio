import "./about.css";
import Brian from "../../img/Brian.jpg";
import Huff from "../../img/huff.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
          src={Brian} 
          alt="Otra foto de Brian" 
          className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Ok aquí hay alguna información
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <div className="a-award">
          <img src={Huff} alt="award" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Memeber of house Hufflepuff</h4>
            <p>
              Porque soy el tanque ya tú sabe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
