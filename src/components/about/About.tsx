import "./About.css";

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
      </div>
    </section>
  );
}

export default About;
