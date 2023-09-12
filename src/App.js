import "./App.css";
import { Router, Route } from "react-router-dom";

import Demo from "./Components/Demo";
import DemoProfile from "./Components/DemoProfile";

function App() {
  return (
    <Router>
      <Route path="/demo" element={<Demo></Demo>}></Route>
      <Route path="/demo/profile" element={<DemoProfile></DemoProfile>}></Route>
    </Router>
  );
}

export default App;
