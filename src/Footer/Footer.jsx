import logo from "../assets/logo/logo.png";
import FooterLogo from "./FooterLogo";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer mx-5 py-4 grid grid-cols-3">
        <div className="footer-left">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ul className="col col-1">
              <li className="head">By Frappe</li>
              <li>Frappe Framework</li>
              <li>ERPNext</li>
            </ul>
            <ul className="col col-1">
              <li className="head">Terms</li>
              <li>Acceptable Use Policy</li>
              <li>Terms Of Use</li>
              <li>Terms Of Certification</li>
            </ul>
            <ul className="col col-1">
              <li className="head">Policies</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
            <ul className="col col-1">
              <li className="head">Company</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-right"></div>
      </footer>
      <FooterLogo />
    </>
  );
}

export default Footer;
