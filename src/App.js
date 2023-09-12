import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Demo from "./Components/Demo";
import DemoProfile from "./Components/DemoProfile";
import DemoContact from "./Components/DemoContact";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
