import React from "react";
import Nav from "../Navigation/Nav";
import HeaderStatistics from "../Header/HeaderStatistics";
import ContentGridStatistics from "../Content-Grid/ContentGridStatistics";
import ContentCardStatisticsCharts from "../Content-Grid/ContentCardStatisticsCharts";
import Footer from "../Footer/Footer";

function Statistics() {
  return (
    <div className="p-5 mx-7">
      <Nav />
      <HeaderStatistics />
      <ContentGridStatistics />
      <ContentCardStatisticsCharts />
      <Footer />
    </div>
  );
}

export default Statistics;
