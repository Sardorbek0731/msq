// CSS
import "./Footer.css";

// Images
import logo from "../../assets/images/light-logo.png";

function Footer({ setClickLang }) {
  return (
    <footer
      className="footer flex"
      id="contact"
      onClick={() => {
        setClickLang(false);
      }}
    >
      <div className="footerInfos flex column wf-50">
        <a href="#" className="logo footerLogo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="address">
          <h3>Urganch shahar, Sanoatchilar ko'chasi, 1-yo'lak, 1A uy</h3>
        </div>
        <a className="footerNumber" href="tel: +998973603033">
          +998 97 360 3033
        </a>
        <a className="footerNumber" href="tel: +998994291212">
          +998 99 429 1212
        </a>
        <a className="footerNumber" href="tel: +998990410141">
          +998 99 041 0141
        </a>
      </div>
      <div className="footerMap wf-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d360.72993490486675!2d60.659717292683126!3d41.52679541189042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1706339418604!5m2!1sen!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
