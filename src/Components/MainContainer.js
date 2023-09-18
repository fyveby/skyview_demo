import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Videos from "./Videos";
import Unity from "./Unity";

function MainContainer(props) {
  const type = props.type;
  console.log(type);
  return (
    <div className="fill">
      {type == "home" && <Videos></Videos>}
      {type == "contact" && <ContactForm></ContactForm>}
      {type == "faq" && <FAQ></FAQ>}
      {type == "unity" && <Unity></Unity>}
    </div>
  );
}
export default MainContainer;
