import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Components/Demo";
import DemoProfile from "./Components/DemoProfile";
import DemoContact from "./Components/DemoContact";
import DemoFAQ from "./Components/DemoFAQ";
import DemoUnity from "./Components/DemoUnity";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        {/* <div className="row">
          <nav class="navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow">
            <span class="navbar-brand mb-0 h1 p-2">Hangar #1</span>
          </nav>
        </div> */}
        <div className="row">
          <div className="col-md-2 bg-light sidebar sidenav">
            <SideNavBar></SideNavBar>
          </div>

          <div className="col-md-10">
            <Routes>
              <Route path="/demo" element={<Demo></Demo>}></Route>
              <Route
                path="/demo/profile"
                element={<DemoProfile></DemoProfile>}
              ></Route>
              <Route
                path="/demo/contact"
                element={<DemoContact></DemoContact>}
              ></Route>
              <Route
                path="/demo/faq"
                element={<DemoFAQ></DemoFAQ>}
              ></Route>
              <Route
                path="/demo/unity"
                element={<DemoUnity></DemoUnity>}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
