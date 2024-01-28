// CSS
import "./App.css";

// Components
import Header from "./components/navbar/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
