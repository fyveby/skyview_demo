import ContactForm from "./ContactForm";
import Videos from "./Videos";

function MainContainer(props) {
  const type = props.type;
  console.log(type);
  return (
    <div>
      {type == 1 && <Videos></Videos>}
      {type == 2 && <ContactForm></ContactForm>}
    </div>
  );
}
export default MainContainer;
