import { Link } from "react-router-dom";
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
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-primary">
      <svg className="bi pe-none me-2" width="40" height="32"></svg>
      <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        Fyve By
      </span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/demo"
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
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          ></img>
          <strong>John Smith</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideNavBar;
