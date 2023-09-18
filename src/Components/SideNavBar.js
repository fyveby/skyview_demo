import { Link } from "react-router-dom";
import Logo from "../Images/FyveBy+Logo+w+Text.png";
function SideNavBar() {
  let currentlyActive = "home";
  const changeActive = (id) => {
    const current = document.getElementById(currentlyActive);
    const active = document.getElementById(id);
    currentlyActive = id;
    current.classList.remove("active");
    current.classList.add("link-body-emphasis");
    active.classList.remove("link-body-emphasis");
    active.classList.add("active");
  };
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-primary fill">
      <svg className="bi pe-none me-2" width="40" height="16"></svg>
      <span className="d-flex justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none logobox">
        <img
          className="img-responsive me-2"
          src={Logo}
          style={{ width: "50%", height: "100%" }}
        ></img>
      </span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            id="home"
            className="nav-link active"
            onClick={() => {
              changeActive("home");
            }}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/demo"
            id="demo"
            className="nav-link"
            onClick={() => {
              changeActive("demo");
            }}
          >
            Cameras
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/demo/unity"
            className="nav-link link-body-emphasis"
            id="unity"
            onClick={() => {
              changeActive("unity");
            }}
          >
            Unity
          </Link>
        </li>
        <li className="nav-item">
          <Link
            id="contact"
            to="/demo/contact"
            className="nav-link link-body-emphasis"
            onClick={() => {
              changeActive("contact");
            }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/demo/faq"
            id="FAQ"
            className="nav-link link-body-emphasis"
            onClick={() => {
              changeActive("FAQ");
            }}
          >
            FAQs
          </Link>
        </li>
      </ul>
      <hr />
      <div>
        <img
          src="https://github.com/mdo.png"
          alt="Profile Picture"
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
