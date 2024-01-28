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
        <div className="title">
          <h1>
            <span className="firstLetter">L</span>oyihalar ...
          </h1>
        </div>
        <div className="projectItems wf-100">
          <div className="rowMain flex wf-100 justifyBetween">
            <img src={project1} className="firstProject" alt="Project Images" />

            <div className="columnImgs wf-100">
              <div className="row wf-100 flex justifyBetween">
                <img src={project2} alt="Project Images" />
                <img src={project3} alt="Project Images" />
              </div>
              <div className="row wf-100 flex justifyBetween">
                <img src={project4} alt="Project Images" />
                <img src={project5} alt="Project Images" />
              </div>
              <div className="row wf-100 flex justifyBetween">
                <img src={project6} alt="Project Images" />
                <img src={project7} alt="Project Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
