// CSS
import "./App.css";

// Components
import Header from "./components/navbar/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Advantages from "./components/advantages/Advantages";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

// Hooks
import { useState } from "react";

function App() {
  const [clickLang, setClickLang] = useState<boolean>(false);
  return (
    <>
      <Header clickLang={clickLang} setClickLang={setClickLang} />
      {/* <Home setClickLang={setClickLang} /> */}
      <About setClickLang={setClickLang} />
      <Advantages setClickLang={setClickLang} />
      <Projects setClickLang={setClickLang} />
      <Footer setClickLang={setClickLang} />
    </>
  );
}

export default App;
