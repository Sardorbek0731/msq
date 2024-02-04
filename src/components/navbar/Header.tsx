// CSS
import "./Header.css";

// Images
import logo from "../../assets/images/logo.png";

// Hooks
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header({ clickLang, setClickLang }) {
  const [langValue, setLangValue] = useState<string>("O'zbek");
  const { t, i18n } = useTranslation();
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
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#projects">{t("navbar.projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("navbar.contact")}</a>
            </li>
          </ul>

          <div className="numberAndLang flex alignCenter">
            <a className="number flex alignCenter" href="tel: +998941173949">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
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
                    i18n.changeLanguage("uz");
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
                    i18n.changeLanguage("ru");
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
