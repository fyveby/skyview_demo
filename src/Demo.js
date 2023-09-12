function Demo() {
  return (
    <div className="border" style={{ width: "100vw", height: "98vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-md-2 col-lg-1 border" style={{ height: "100%" }}>
          <div
            className="row border navbar navbar-primary navbar-fixed-left"
            style={{ height: "15%" }}
          >
            <p className="text-center navbar-brand">FYVEBY Logo</p>
          </div>
          <div className="row border " id="nav" style={{ height: "85%" }}>
            <p>Profile Icon + route to /Profile</p>
            <p>Randomhange</p>
          </div>
        </div>

        <div className="col-md-10 col-lg-11 border">
          <div className="row border" style={{ height: "15%" }}>
            Profile/Hangar #
          </div>
          <div className="row border" style={{ height: "85%" }}>
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
        </div>
      </div>
    </div>
  );
}

export default Demo;
