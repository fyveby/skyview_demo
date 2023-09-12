import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Demo from "./Demo";
import DemoProfile from "./DemoProfile";
import DemoContact from "./DemoContact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo></Demo>}></Route>
        <Route path="/profile" element={<DemoProfile></DemoProfile>}></Route>
        <Route path="/contact" element={<DemoContact></DemoContact>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
