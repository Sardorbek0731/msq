// CSS
import "./Header.css";

// Images
import logo from "../../assets/images/logo.png";

// Icons
import uz from "../../assets/icons/uz.png";
import ru from "../../assets/icons/ru.png";
import navBtn from "../../assets/icons/column-menu.png";

// Hooks
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header({ clickLang, setClickLang }) {
  const [langValue, setLangValue] = useState<string>("O'zbek");
  const { t, i18n } = useTranslation();

  interface INavbar {
    title: string;
    href: string;
  }

  const navbarLists: INavbar[] = [
    {
      title: t("navbar.about"),
      href: "about",
    },
    {
      title: t("navbar.advantages"),
      href: "advantages",
    },
    {
      title: t("navbar.projects"),
      href: "projects",
    },
    {
      title: t("navbar.contact"),
      href: "contact",
    },
  ];

  return (
    <header className="flex alignCenter wf-100">
      <div className="container wf-100">
        <nav className="nav flex alignCenter justifyBetween">
          <a href="#" className="logo flex alignCenter">
            <img src={logo} alt="Logo" />
            <h3>Muhammad Savdo Qurilish MCHJ</h3>
          </a>

          <ul className="flex alignCenter">
            {navbarLists.map((item: INavbar, index: number) => {
              return (
                <li key={index}>
                  <a href={"#" + item.href}>{item.title}</a>
                </li>
              );
            })}
          </ul>

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
            <img src={langValue == "O'zbek" ? uz : ru} alt="Flag icon" />
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
                <img src={uz} alt="Flag icon" />
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
                <img src={ru} alt="Flag icon" />
                Русский
              </div>
            </div>
          </div>

          <div className="columnNavbar_btn">
            <img src={navBtn} alt="Column Menu Button" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
