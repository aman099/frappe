import ContentGridJob from "../Content-Grid/ContentGridJob";
import Footer from "../Footer/Footer";
import HeaderJob from "../Header/HeaderJob";
import Nav from "../Navigation/Nav";

function JobOpenings() {
  return (
    <div className="p-5 mx-7">
      <Nav />
      <HeaderJob />
      <ContentGridJob />
      <Footer />
    </div>
  );
}

export default JobOpenings;
