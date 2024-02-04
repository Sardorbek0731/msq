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
import { useTranslation } from "react-i18next";

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
      title: "Al-Xorazmiy majmuasidagi bolalar maydonchasi",
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
          <h1>{t("section.projectTitle")}</h1>
        </div>
        <div className="rowMain flex justifyBetween">
          <div className="firstProject">
            <img src={project1} alt="Project Images" />
            <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi</h2>
          </div>

          <div className="columnImgs flex">
            {projects.map((item: IProject, index: number) => {
              return (
                <div className="projectImg wf-100" key={index}>
                  <img src={item.image} alt="Project Images" />
                  <h2>{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
