// CSS
import "./Header.css";

// Images
import logo from "../../assets/images/logo.png";

function Header() {
  //   let navbarLists = ["Loyihalar", "Biz haqimizda", "Kontakt"];

  return (
    <header>
      <div className="container">
        <nav className="nav flex alignCenter justifyBetween">
          <a href="#" className="logo flex alignCenter">
            <img src={logo} alt="Logo" />
            <h3>Muhammad Savdo Qurilish MCHJ</h3>
          </a>

          <ul className="flex alignCenter">
            <li>
              <a href="#">Loyihalar</a>
            </li>

            <li>
              <a href="#">Biz haqimizda</a>
            </li>

            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>

          <a className="number" href="tel: +998941173949">
            +998 94 117 3949
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
