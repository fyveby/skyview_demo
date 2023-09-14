import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-primary">
      <svg className="bi pe-none me-2" width="40" height="32"></svg>
      <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        Fyve By
      </span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/demo" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/demo/contact" className="nav-link link-body-emphasis">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/demo/faq" className="nav-link link-body-emphasis">
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
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideNavBar;
