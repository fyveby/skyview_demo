function DemoProfile() {
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
            put stuff here
          </div>

          {/* <div className="row border" style={{ height: "85%" }}>
            <div className="row border"></div>
            <div className="row" style={{ height: "2.5%" }}>
              <div className="col border"></div>
              <div
                className="col d-flex justify-content-center border"
                style={{ height: "250px" }}
              >
                <img
                  src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
                  alt="random text"
                  className="img rounded-circle border"
                  style={{ width: "160px", height: "150px" }}
                />
              </div>
              <div className="col border"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DemoProfile;
