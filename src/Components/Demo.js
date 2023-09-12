import Logo from "../Images/FyveBy+Logo+w+Text.png";
import DemoNav from "./DemoNav";
function Demo() {
  return (
    <DemoNav
      content={
        <div
          className="row border d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="row m-0" style={{ height: "10%" }}></div>
          <div className="row" style={{ height: "35%" }}>
            <div className="col-md-1 col-lg-2"></div>
            <div className="col border">Front</div>
            <div className="col-md-1 col-lg-2"></div>
            <div className="col border">Back</div>
            <div className="col-md-1 col-lg-2"></div>
          </div>
          <div className="row" style={{ height: "10%" }}></div>
          <div className="row" style={{ height: "35%" }}>
            <div className="col-md-1 col-lg-2"></div>
            <div className="col border">Left</div>
            <div className="col-md-1 col-lg-2"></div>
            <div className="col border">Right</div>
            <div className="col-md-1 col-lg-2"></div>
          </div>
          <div className="row" style={{ height: "10%" }}></div>
        </div>
      }
    ></DemoNav>
  );
}

export default Demo;
