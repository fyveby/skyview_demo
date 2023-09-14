import ContactForm from "./ContactForm";
import Videos from "./Videos";
import ProfilePage from "./ProfilePage";

function MainContainer(props) {
  const type = props.type;
  console.log(type);
  return (
    <div>
      {type == 1 && <Videos></Videos>}
      {type == 2 && <ContactForm></ContactForm>}
      {type == 4 && <ProfilePage></ProfilePage>}
    </div>
  );
}
export default MainContainer;
