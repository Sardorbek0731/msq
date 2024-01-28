// CSS
import "./About.css";

// Images
import aboutImg from "../../assets/images/about.jpg";

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
        <div className="title">
          <h1>
            <span className="firstLetter">B</span>
            iz haqimizda ...
          </h1>
        </div>
        <div className="aboutInfos flex justifyBetween">
          <div className="aboutUs_text flex column">
            <div href="#" className="logo aboutLogo flex alignCenter">
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
    </section>
  );
}

export default About;
