import { NavLink } from "react-router-dom";
import Logo from "../Images/FyveBy+Logo+w+Text.png";

function SideNavBar(props) {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
    };
  };
  return (
    <div className="d-flex flex-column p-3 bg-body-primary fill">
      <svg className="bi pe-none me-2" width="40" height="16"></svg>
      <span className="d-flex justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none logobox">
        <img
          className="img-responsive me-2"
          src={Logo}
          alt="fyveby logo"
          style={{ width: "50%", height: "100%" }}
        ></img>
      </span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" id="/" className="nav-link" style={activeStyle}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/demo/camera"
            id="/demo/camera"
            className="nav-link"
            style={activeStyle}
          >
            Camera - Demo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/demo/unity"
            className="nav-link"
            style={activeStyle}
            id="/demo/unity"
          >
            Unity - Demo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            id="/demo/contact"
            to="/demo/contact"
            className="nav-link"
            style={activeStyle}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/demo/faq"
            id="/demo/faq"
            className="nav-link link-body-emphasis"
          >
            FAQs
          </NavLink>
        </li>
      </ul>
      <hr />
      <div>
        <img
          src="https://github.com/mdo.png"
          alt="Profile"
          width="32"
          height="32"
          className="rounded-circle me-2"
        ></img>
        <strong>John Smith</strong>
      </div>
    </div>
  );
}
export default SideNavBar;
