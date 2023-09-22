import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Videos from "./Videos";
import SideNavBar from "./SideNavBar";
import Videos2 from "./Videos2";

function MainContainer(props) {
  const type = props.type;
  return (
    <div className="container-fluid fill p-0">
      <div className="row">
        <div
          className="col-md-2 col-lg-2 bg-light sidebar sidenav fill"
          style={{ padding: "0" }}
        >
          <SideNavBar></SideNavBar>
        </div>
        <div className="col-md-10 col-lg-10">
          {type == "demo" && <Videos2></Videos2>}
          {type == "contact" && <ContactForm></ContactForm>}
          {type == "faq" && <FAQ></FAQ>}
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
