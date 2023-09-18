import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="fill container-fluid">
      <div className="row d-flex justify-content-center mt-5">
        <Authenticator
          hideSignUp={true}
          className="border mt-5"
        ></Authenticator>
      </div>
      <div className="row" style={{ height: "20%" }}></div>

      <div className="row" style={{ height: "5%" }}>
        <div className=" col-md-2"></div>
        <div
          className="col-md-3 border d-flex justify-content-center"
          style={{ fontSize: "2rem" }}
        >
          <Link to="./demo/camera">Demo</Link>
        </div>
        <div className="col-md-2"></div>
        <div className=" col-md-3 border d-flex justify-content-center">
          <Link to="./demo/contact" style={{ fontSize: "2rem" }}>
            Contact Us
          </Link>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Login;
