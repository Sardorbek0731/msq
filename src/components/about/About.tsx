// CSS
import "./About.css";

// Images
import aboutImg from "../../assets/images/about.jpg";
import { useTranslation } from "react-i18next";

function About({ setClickLang }) {
  const { t } = useTranslation();

  interface IAbout {
    title: string;
    info: string;
  }

  const aboutItems: IAbout[] = [
    {
      title: t("aboutSection.director"),
      info: t("director.name"),
    },
    {
      title: t("aboutSection.birthday"),
      info: t("aboutSection.date"),
    },
    {
      title: t("aboutSection.finishedProject"),
      info: t("aboutSection.projectCount"),
    },
    {
      title: t("aboutSection.level"),
      info: t("aboutSection.levelDate"),
    },
    {
      title: t("aboutSection.address"),
      info: t("footer.address"),
    },
  ];

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
          <h1>{t("navbar.about") + "..."}</h1>
        </div>
        <div className="aboutInfos flex justifyBetween">
          <div className="aboutUs_text flex column">
            <div className="logo aboutLogo flex alignCenter">
              <h3>Muhammad Savdo Qurilish MCHJ</h3>
            </div>

            {aboutItems.map((item: IAbout, index: number) => {
              return (
                <div className="aboutItem flex justifyBetween" key={index}>
                  <h3>{item.title}:</h3>
                  <h3>{item.info}</h3>
                </div>
              );
            })}
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
