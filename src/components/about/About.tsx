// CSS
import "./About.css";

// Images
import aboutImg from "../../assets/images/about.jpg";
import { useTranslation } from "react-i18next";

function About({ setClickLang }) {
  const { t } = useTranslation();
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
          <h1>{t("section.aboutTitle")}</h1>
        </div>
        <div className="aboutInfos flex justifyBetween">
          <div className="aboutUs_text flex column">
            <div className="logo aboutLogo flex alignCenter">
              <h3>Muhammad Savdo Qurilish MCHJ</h3>
            </div>
            <div className="director aboutItem flex justifyBetween">
              <h3>{t("aboutSection.director")}:</h3>
              <h3>{t("director.name")}</h3>
            </div>
            <div className="birthday aboutItem flex justifyBetween">
              <h3>{t("aboutSection.birthday")}:</h3>
              <h3>{t("aboutSection.date")}</h3>
            </div>
            <div className="finishedProject aboutItem flex justifyBetween">
              <h3>{t("aboutSection.finishedProject")}:</h3>
              <h3>{t("aboutSection.projectCount")}</h3>
            </div>
            <div className="finishedProject aboutItem flex justifyBetween">
              <h3>{t("aboutSection.level")}:</h3>
              <h3>{t("aboutSection.levelDate")}</h3>
            </div>
            <div className="addressAbout flex aboutItem justifyBetween">
              <h3>{t("aboutSection.address")}:</h3>
              <h3>{t("footer.address")}</h3>
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
