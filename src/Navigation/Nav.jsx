import { useRef, useState } from "react";
import logo from "../assets/logo/logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const popupMenus = [
  {
    menuName: "Explore",
    option_1: "Courses",
    option_2: "Statistics",
    option_3: "Jobs",
    option_4: "People",
  },
  {
    menuName: "Certifications",
    option_1: "Batch Schedule",
    option_2: "Certified Participants",
    option_3: null,
    option_4: null,
  },
  {
    menuName: "Course Creation",
    option_1: "Create a Course",
    option_2: "Guidelines",
    option_3: null,
    option_4: null,
  },
];

function Nav() {
  const [visibleIdx, setVisibleIdx] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  function handleClick(e, idx) {
    // At a time only 1 absolute child can have 'hide' class removed while 2 others will have the 'hide' child
    console.log(idx);

    if (idx === 0) {
      setVisibleIdx(0);
    }
    if (idx === 1) {
      setVisibleIdx(1);
    }
    if (idx === 2) {
      setVisibleIdx(2);
    }

    if (e.target == null) return;

    if (e?.target?.children[1]?.classList.contains("show")) {
      setVisibleIdx(null);
    }
  }

  function handleOpen() {
    console.log("Hamburger Menu Clicked!");
    setPopupOpen((open) => !open);
  }

  return (
    <>
      <nav className="navigation pb-4">
        <div className="navigation-container flex justify-between items-center max-w-6xl">
          <div className="left ml-6">
            <img src={logo} alt="Logo" />
          </div>
          <div className="right">
            <div onClick={handleOpen} className="hamburger-menu">
              <i className="fa-solid fa-bars"></i>
            </div>

            <ul
              className={`list-container ${
                popupOpen ? "appear" : ""
              } flex gap-2`}
            >
              {popupMenus.map((menu, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={(e) => handleClick(e, idx)}
                    className="list popup-parent mr-7 flex items-center gap-2 text-sm"
                  >
                    {menu.menuName}
                    <i className="fa-solid fa-caret-down"></i>
                    <ul className={`popup ${visibleIdx === idx ? "show" : ""}`}>
                      {menu.option_1 === "Courses" ? (
                        <Link to={"/"}>
                          <li>{menu.option_1}</li>
                        </Link>
                      ) : (
                        <li>{menu.option_1}</li>
                      )}
                      {menu.option_2 === "Statistics" ? (
                        <Link to={"/statistics"}>
                          <li>{menu.option_2}</li>
                        </Link>
                      ) : (
                        <li>{menu.option_2}</li>
                      )}
                      {menu.option_3 != null && (
                        <>
                          <Link to={"/job-openings"}>
                            <li>{menu.option_3}</li>
                          </Link>
                          <Link to={"/people"}>
                            <li>{menu.option_4}</li>
                          </Link>
                        </>
                      )}
                    </ul>
                  </li>
                );
              })}
              <li className="list mr-7 flex items-center gap-2 text-sm">
                About Us
              </li>
              <li className="list mr-7 flex items-center gap-2 text-sm">
                Blog
              </li>
              <li className="list mr-7 flex items-center gap-2 text-sm">
                Login
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="absolute top-14 h-0.5 left-0 bg-slate-100 w-full"></div>
    </>
  );
}

export default Nav;
