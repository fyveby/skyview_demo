import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Videos from "./Videos";
import Unity from "./Unity";
import Login from "./Login";

function MainContainer(props) {
  const type = props.type;
  return (
    <div className="fill border">
      {type == "home" && <Login></Login>}
      {type == "demo" && <Videos></Videos>}
      {type == "contact" && <ContactForm></ContactForm>}
      {type == "faq" && <FAQ></FAQ>}
      {type == "unity" && <Unity></Unity>}
    </div>
  );
}
export default MainContainer;
