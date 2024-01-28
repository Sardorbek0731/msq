import "./Projects.css";

function Projects({ setClickLang }) {
  return (
    <section
      className="projects"
      id="projects"
      onClick={() => {
        setClickLang(false);
      }}
    >
      <div className="container">
        <div className="title">
          <h1>Loyihalar</h1>
        </div>
      </div>
    </section>
  );
}

export default Projects;
