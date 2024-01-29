// CSS
import "./About.css";

// Images
import aboutImg from "../../assets/images/about.jpg";
import Advantages from "../advantages/Advantages";

function About({ setClickLang }) {
  return (
    <section
      className="about"
      id="about"
      onClick={() => {
        setClickLang(false);
      }}
    >
      <div className="container">
        <div className="sectionTitle">
          <h1>
            <span className="firstLetter">B</span>
            iz haqimizda ...
          </h1>
        </div>
        <div className="aboutInfos flex justifyBetween">
          <div className="aboutUs_text flex column">
            <div className="logo aboutLogo flex alignCenter">
              <h3>Muhammad Savdo Qurilish MCHJ</h3>
            </div>
            <div className="director flex justifyBetween">
              <h3>Direktor:</h3>
              <h3>Olimov Azizbek</h3>
            </div>
            <div className="birthday flex justifyBetween">
              <h3>Tashkil topgan sana:</h3>
              <h3>2014-yil 6-dekabr</h3>
            </div>
          </div>
          <div className="aboutUs_img flex">
            <img src={aboutImg} alt="About us image" />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 80 }}>
        <Advantages />
      </div>
    </section>
  );
}

export default About;
