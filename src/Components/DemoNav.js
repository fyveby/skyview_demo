import Logo from "../Images/FyveBy+Logo+w+Text.png";

function DemoNav(props) {
  return (
    <div className="border" style={{ width: "100vw", height: "98vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-md-2 col-lg-1 border" style={{ height: "100%" }}>
          <div
            className="row border navbar navbar-primary navbar-fixed-left d-flex justify-content-center align-items-center"
            style={{ height: "15%" }}
          >
            <img src={Logo} alt="Logo" style={{ width: "60%" }}></img>
          </div>
          <div className="row border " id="nav" style={{ height: "85%" }}>
            <p>World</p>
          </div>
        </div>

        <div className="col-md-10 col-lg-11 border">
          <div
            className="row border d-flex justify-content-center"
            style={{ height: "15%" }}
          >
            <h2>Hanger 1</h2>
            <i class="glyphicon glyphicon-user"></i>
          </div>
          <div
            className="row border d-flex flex-column justify-content-center align-items-center"
            style={{ height: "85%" }}
          >
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoNav;
