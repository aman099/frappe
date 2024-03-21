import { useEffect, useRef, useState } from "react";
import "./Header.css";

function Header({ optionCapture }) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [displayModal, setDisplayModal] = useState(false);

  const inputRef = useRef(null);

  function handleSelect(valueRecieved) {
    setValue(valueRecieved);
    optionCapture(valueRecieved);
  }

  function handleClick(e) {
    console.log("I got Clicked!");
    setDisplayModal(true);
  }

  function handleClose(e) {
    if (e.target === inputRef.current) return;
    setDisplayModal(false);
  }

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <header className="header mx-5 py-4 mt-6 mb-0">
      <div className="header-container flex justify-between items-center max-w-6xl">
        <h3 className="text-xl font-semibold">All Courses</h3>
        <div className="btn-container flex items-center gap-8 mr-4">
          <select
            onChange={(e) => handleSelect(e.target.value)}
            className="btn select-btn cursor-pointer bg-slate-100 p-3 py-1 rounded-lg"
          >
            <option disabled value="">
              Sort By
            </option>
            <option value="Most Popular">Most Popular</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Newest">Newest</option>
          </select>
          <button
            onClick={(e) => handleClick(e)}
            className="btn bg-slate-100 p-3 py-1 rounded-lg"
          >
            Search (Ctrl + k)
          </button>
          <div
            onClick={(e) => handleClose(e)}
            className={`modal ${displayModal ? "active" : ""}`}
          >
            <input
              ref={inputRef}
              type="text"
              // value={inputValue}
              placeholder="Search something.."
              // onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
