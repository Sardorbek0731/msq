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

function Projects({ setClickLang }) {
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
          <h1>
            <span className="firstLetter">L</span>oyihalar ...
          </h1>
        </div>
        <div className="rowMain flex justifyBetween">
          <div className="firstProject">
            <img src={project1} alt="Project Images" />
            <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi.</h2>
          </div>

          <div className="columnImgs flex column justifyBetween">
            <div className="row wf-100 flex justifyBetween">
              <div className="projectImg wf-100">
                <img src={project2} alt="Project Images" />
                <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi.</h2>
              </div>
              <div className="projectImg wf-100">
                <img src={project3} alt="Project Images" />
                <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi</h2>
              </div>
            </div>
            <div className="row wf-100 flex justifyBetween">
              <div className="projectImg">
                <img src={project5} alt="Project Images" />
                <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi</h2>
              </div>
              <div className="projectImg">
                <img src={project4} alt="Project Images" />
                <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi</h2>
              </div>
            </div>
            <div className="row wf-100 flex justifyBetween">
              <div className="projectImg">
                <img src={project7} alt="Project Images" />
                <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi</h2>
              </div>
              <div className="projectImg">
                <img src={project6} alt="Project Images" />
                <h2>Al-Xorazmiy majmuasidagi bolalar maydonchasi.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
