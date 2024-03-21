import ContentGridPeople from "../Content-Grid/ContentGridPeople";
import Footer from "../Footer/Footer";
import HeaderPeople from "../Header/HeaderPeople";
import Nav from "../Navigation/Nav";

function People() {
  return (
    <div className="p-5 mx-7">
      <Nav />
      <HeaderPeople />
      <ContentGridPeople />
      <Footer />
    </div>
  );
}

export default People;
