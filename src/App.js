import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Components/Demo";
import DemoProfile from "./Components/DemoProfile";
import DemoContact from "./Components/DemoContact";
import DemoFAQ from "./Components/DemoFAQ";
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
              <Route path="/demoCam" element={<Demo></Demo>}></Route>
              <Route
                path="/demoProfile"
                element={<DemoProfile></DemoProfile>}
              ></Route>
              <Route
                path="/demoContact"
                element={<DemoContact></DemoContact>}
              ></Route>
              <Route path="/demoFAQ" element={<DemoFAQ></DemoFAQ>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
