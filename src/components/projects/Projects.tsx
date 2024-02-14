// CSS
import "./Projects.css";

// Images
import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.jpg";
import project7 from "../../assets/images/project-7.jpg";
import fullscreenBtn from "../../assets/icons/fullscreen.png";
import close from "../../assets/icons/close-white.png";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";
import { useTranslation } from "react-i18next";

// Hooks
import { useState } from "react";

function Projects({ setClickLang }) {
  const { t } = useTranslation();

  interface IProject {
    image: string;
    title: string;
  }

  const projects: IProject[] = [
    {
      image: project2,
      title: "Al-Xorazmiy majmuasidagi bolalar maydonchasi",
    },
    {
      image: project3,
      title: "Loyihadagi quyosh panellari joylashuvi",
    },
    {
      image: project4,
      title: "Al-Xorazmiy majmuasidagi bolalar maydonchasi",
    },
    {
      image: project5,
      title: "Al-Xorazmiy majmuasidagi bolalar maydonchasi",
    },
    {
      image: project6,
      title: "Al-Xorazmiy majmuasidagi bolalar maydonchasi",
    },
    {
      image: project7,
      title: "Al-Xorazmiy majmuasidagi bolalar maydonchasi",
    },
  ];

  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);

  return (
    <section
      className="projects"
      id="projects"
      onClick={() => {
        setClickLang(false);
      }}
    >
      <div className="container flex column">
        <div className="sectionTitle">
          <h1>{t("navbar.projects") + "..."}</h1>
        </div>

        <div className="rowMain flex justifyBetween">
          <div
            className="firstProject"
            onClick={() => {
              setFullscreen(true);
            }}
          >
            <img src={project1} alt="Project Images" />
            <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi</h2>
            <div className="fullscreenBtn">
              <img src={fullscreenBtn} alt="FullScreen Button" />
            </div>
          </div>

          <div className="columnImgs flex">
            {projects.map((item: IProject, index: number) => {
              return (
                <div
                  className="projectImg"
                  key={index}
                  onClick={() => {
                    setFullscreen(true);
                  }}
                >
                  <img src={item.image} alt="Project Images" />
                  <h2>{item.title}</h2>

                  <div className="fullscreenBtn">
                    <img src={fullscreenBtn} alt="FullScreen Button" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={
            fullscreen
              ? "fullscreenImages flex justifyBetween"
              : "fullscreenImages flex justifyBetween hidden"
          }
          style={{ marginLeft: "-" + 100 * imgIndex + "%" }}
        >
          <div className="fullscreenImage flex alignCenter justifyCenter">
            <img src={project1} alt="Project Images" />
          </div>
          {projects.map((item: IProject, index: number) => {
            return (
              <div
                className="fullscreenImage flex alignCenter justifyCenter"
                key={index}
              >
                <img src={item.image} alt="Project Images" />
              </div>
            );
          })}
        </div>

        <div
          className={
            fullscreen ? "fullscreenButtons" : "fullscreenButtons hidden"
          }
        >
          <div
            className="closeFullscreen flex alignCenter justifyCenter"
            onClick={() => {
              setFullscreen(false);
            }}
          >
            <img src={close} alt="Close Fullscreen" />
          </div>
          <button
            className="leftBtn sideBtn flex alignCenter justifyCenter"
            disabled={imgIndex > 0 ? false : true}
            onClick={() => {
              setImgIndex(imgIndex - 1);
            }}
          >
            <img src={left} alt="Left Fullscreen" />
          </button>
          <button
            className="rightBtn sideBtn flex alignCenter justifyCenter"
            disabled={imgIndex < projects.length ? false : true}
            onClick={() => {
              setImgIndex(imgIndex + 1);
            }}
          >
            <img src={right} alt="Right Fullscreen" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
