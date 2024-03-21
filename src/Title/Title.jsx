import { useState } from "react";
import "./Title.css";

const titles = ["Live", "Upcoming"];

function Title({ indexCapture }) {
  const [active, setActive] = useState(0);

  function handleClick(e, idx) {
    setActive(idx === 1 ? 1 : 0);
    indexCapture(idx);
  }

  return (
    <>
      <div className="title mx-5 py-4 flex gap-20">
        {titles.map((title, idx) => (
          <div
            onClick={(e) => handleClick(e, idx)}
            key={idx}
            className={`title-content title-${idx + 1} ${
              active === idx ? "active" : ""
            }`}
          >
            <span className={`title-abs abs-${idx + 1}`}>{title}</span>
          </div>
        ))}
      </div>
      <hr className="mx-5" style={{ width: "96.5%" }} />
    </>
  );
}

export default Title;
