// CSS
import "./Home.css";

function Home({ setClickLang }) {
  return (
    <section
      className="home"
      onClick={() => {
        setClickLang(false);
      }}
    >
      <div className="container">
        <h1>Home</h1>
      </div>
    </section>
  );
}

export default Home;
