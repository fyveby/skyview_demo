function DemoContact() {
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
            <p>World</p>
          </div>
        </div>

        <div className="col-md-10 col-lg-11 border">
          <div className="row border" style={{ height: "15%" }}>
            Profile/Hangar #
          </div>
          <div
            className="row border d-flex flex-column justify-content-center align-items-center"
            style={{ height: "85%" }}
          >
            <div
              className="d-flex border justify-content-center align-items-center"
              style={{ height: "100%", width: "100%" }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdPjO4k40MhOHnIl4YK0Bw1X1Jo7AixbmGnzViF--wSh-TivA/viewform?embedded=true"
                title="Contact"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{ width: "85%", height: "85%" }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoContact;
