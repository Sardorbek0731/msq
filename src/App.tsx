// CSS
import "./App.css";

// Components
import Header from "./components/navbar/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

// Hooks
import { useState } from "react";

function App() {
  const [clickLang, setClickLang] = useState(false);
  return (
    <>
      <Header clickLang={clickLang} setClickLang={setClickLang} />
      <Home setClickLang={setClickLang} />
      <Projects setClickLang={setClickLang} />
      <About setClickLang={setClickLang} />
      <Footer setClickLang={setClickLang} />
    </>
  );
}

export default App;
