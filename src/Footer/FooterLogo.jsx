import medium from "../assets/logo/medium.png";

function FooterLogo() {
  return (
    <div className="footer-logo mx-5 py-4 grid grid-cols-3">
      <p>school@frappe.io</p>
      <div className="logos-container">
        <div className="sm-logos flex items-center gap-8">
          <span className="sm-logo">
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span className="sm-logo">
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span className="sm-logo">
            <img
              style={{ width: "24px", height: "24px" }}
              src={medium}
              alt=""
            />
          </span>
          <span className="sm-logo">
            <i className="fa-brands fa-github"></i>
          </span>
        </div>
        <div className="logo-info">
          Build on Frappe Framework and Frappe LMS
        </div>
      </div>
    </div>
  );
}

export default FooterLogo;
