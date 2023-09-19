import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Videos from "./Videos";
import Unity from "./Unity";
import Login from "./Login";
import SideNavBar from "./SideNavBar";

function MainContainer(props) {
  const type = props.type;
  return (
    <div className="container-fluid border fill p-0">
      <div className="row">
        <div
          className="col-md-2 col-lg-2 bg-light sidebar sidenav fill"
          style={{ padding: "0" }}
        >
          <SideNavBar></SideNavBar>
        </div>
        <div className="col-md-10 col-lg-10">
          {/* {type == "home" && <Login></Login>} */}
          {type == "demo" && <Videos></Videos>}
          {type == "contact" && <ContactForm></ContactForm>}
          {type == "faq" && <FAQ></FAQ>}
          {type == "unity" && <Unity></Unity>}
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
