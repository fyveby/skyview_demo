import { NavLink } from "react-router-dom";
import Logo from "../Images/FyveBy+Logo+w+Text.png";
import ProfPic from "../Images/ProfPic.jpg";

function SideNavBar(props) {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "#2B7DA3" : "E8EAF5",
      fontSize: "2rem",
    };
  };
  return (
    <div className="d-flex flex-column bg-body-primary p-4 sidenav">
      <svg className="bi pe-none me-2" width="40" height="16"></svg>
      <span className="d-flex justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none logobox">
        <img
          className="img-responsive me-2"
          src={Logo}
          alt="fyveby logo"
          style={{ width: "50%", height: "100%" }}
        ></img>
      </span>
      <hr />
      <ul className="nav nav-pills flex-column mb-3">
        <li className="nav-item">
          <NavLink to="/" id="/" className="nav-link" style={activeStyle}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/demoCam"
            id="/demoCam"
            className="nav-link"
            style={activeStyle}
          >
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            id="/demoContact"
            to="/demoContact"
            className="nav-link"
            style={activeStyle}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/demoFAQ"
            id="/demoFAQ"
            className="nav-link"
            style={activeStyle}
          >
            FAQs
          </NavLink>
        </li>
      </ul>
      <hr />
      <div>
        <img
          src={ProfPic}
          alt="Profile"
          width="32"
          height="32"
          className="rounded-circle me-2"
        ></img>
        <span style={{ fontSize: "1.5rem" }}>John Smith</span>
      </div>
    </div>
  );
}
export default SideNavBar;
