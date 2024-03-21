import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Courses from "./Courses/Courses";
import JobOpenings from "./JobOpenings/JobOpenings";
import People from "./People/People";
import Statistics from "./Statistics/Statistics";

function App() {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState("Most Popular");

  function indexCapture(id) {
    setIndex(id);
  }

  function optionCapture(val) {
    setOption(val);
    console.log(val);
  }

  return (
    <div className="">
      <Routes>
        <Route
          index
          element={
            <Courses
              optionCapture={optionCapture}
              option={option}
              index={index}
              indexCapture={indexCapture}
            />
          }
        />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/job-openings" element={<JobOpenings />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
