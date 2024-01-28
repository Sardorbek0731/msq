// CSS
import "./Header.css";

// Images
import logo from "../../assets/images/logo.png";

// Hooks
import { useState } from "react";

function Header({ clickLang, setClickLang }) {
  const [langValue, setLangValue] = useState("O'zbek");

  //   let navbarLists = ["Loyihalar", "Biz haqimizda", "Kontakt"];

  return (
    <header className="flex alignCenter wf-100">
      <div className="container wf-100">
        <nav className="nav flex alignCenter justifyBetween">
          <a href="#" className="logo flex alignCenter">
            <img src={logo} alt="Logo" />
            <h3>Muhammad Savdo Qurilish MCHJ</h3>
          </a>

          <ul className="flex alignCenter">
            <li>
              <a href="#about">Biz haqimizda</a>
            </li>

            <li>
              <a href="#projects">Loyihalar</a>
            </li>

            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>

          <div className="numberAndLang flex alignCenter">
            <a className="number flex alignCenter" href="tel: +998941173949">
              +998 99 429 1212
            </a>

            <div
              className={
                clickLang
                  ? "language_btn flex alignCenter clickedLangBtn"
                  : "language_btn flex alignCenter"
              }
              onClick={() => {
                setClickLang(!clickLang);
              }}
            >
              <h1>{langValue}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
                id={clickLang ? "lang-arrow" : ""}
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>

              <div
                className={
                  clickLang ? "language_items clickLang" : "language_items"
                }
              >
                <div
                  className={
                    langValue == "O'zbek"
                      ? "language_item activeLang"
                      : "language_item"
                  }
                  onClick={() => {
                    setLangValue("O'zbek");
                  }}
                >
                  O'zbek
                </div>
                <div
                  className={
                    langValue == "Русский"
                      ? "language_item activeLang"
                      : "language_item"
                  }
                  onClick={() => {
                    setLangValue("Русский");
                  }}
                >
                  Русский
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
