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
import Home from "./Components/Home";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row fill">
          <div className="col-md-12 col-lg-12 bg-body-tertiary">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
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
