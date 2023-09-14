import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import MainContainer from "./Components/MainContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo2 from "./Components/Demo2";
import DemoProfile from "./Components/DemoProfile";
import DemoContact from "./Components/DemoContact";

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
          <div className="col-md-2 bg-light sidebar">
            <SideNavBar></SideNavBar>
          </div>

          <div className="col-md-10">
            <Routes>
              <Route path="/demo" element={<Demo2></Demo2>}></Route>
              <Route
                path="/demo/profile"
                element={<DemoProfile></DemoProfile>}
              ></Route>
              <Route
                path="/demo/contact"
                element={<DemoContact></DemoContact>}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
