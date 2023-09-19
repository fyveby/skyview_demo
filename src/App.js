import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Components/Demo";
import DemoProfile from "./Components/DemoProfile";
import DemoContact from "./Components/DemoContact";
import DemoFAQ from "./Components/DemoFAQ";
import Login from "./Components/Login";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="container-fluid">
      <Router>
        {/* <div className="row">
          <nav class="navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow">
            <span class="navbar-brand mb-0 h1 p-2">Hangar #1</span>
          </nav>
        </div> */}
        <div className="row fill">
          {/* <div
            className="col-md-2 col-lg-2 bg-light sidebar sidenav fill"
            style={{ padding: "0" }}
          >
            <SideNavBar></SideNavBar>
          </div> */}

          <div className="col-md-12 col-lg-12 bg-body-tertiary">
            <Routes>
              <Route path="/" element={<Login></Login>}></Route>
              <Route path="/demo/camera" element={<Demo></Demo>}></Route>
              <Route
                path="/demo/profile"
                element={<DemoProfile></DemoProfile>}
              ></Route>
              <Route
                path="/demo/contact"
                element={<DemoContact></DemoContact>}
              ></Route>
              <Route path="/demo/faq" element={<DemoFAQ></DemoFAQ>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
