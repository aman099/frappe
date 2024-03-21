import React from "react";
import Nav from "../Navigation/Nav";
import Header from "../Header/Header";
import Title from "../Title/Title";
import ContentGrid from "../Content-Grid/ContentGrid";
import Footer from "../Footer/Footer";

function Courses({ optionCapture, indexCapture, index, option }) {
  return (
    <div className="p-5 mx-7">
      <Nav />
      <Header optionCapture={optionCapture} />
      <Title indexCapture={indexCapture} />
      <ContentGrid index={index} option={option} />
      <Footer />
    </div>
  );
}

export default Courses;
