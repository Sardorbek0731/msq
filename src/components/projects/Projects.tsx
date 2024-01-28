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
      <div className="container flex column">
        <div className="title">
          <h1>
            <span className="firstLetter">L</span>oyihalar ...
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Projects;
