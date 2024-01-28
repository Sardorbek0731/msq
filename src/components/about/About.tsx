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
        <div className="aboutInfos flex">
          <div className="aboutUs_text flex column">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              possimus dolor pariatur facilis culpa voluptates eaque eveniet
              voluptatum. possimus dolor pariatur facilis culpa voluptates eaque
              eveniet voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              possimus dolor pariatur facilis culpa voluptates eaque eveniet
              voluptatum, qui officia inventore vel earum expedita recusandae,
              impedit quidem dolorem? Commodi fugit blanditiis
              facilisvoluptatum, qui officia inventore vel earum expedita
              recusandae, impedit quidem dolorem? Commodi fugit blanditiis
              facilisvoluptatum, qui officia inventore vel earum expedita
              recusandae, impedit quidem dolorem? Commodi fugit blanditiis
              facilis
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              possimus dolor pariatur facilis culpa voluptates.
            </p>
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
