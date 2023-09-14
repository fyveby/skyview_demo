function ProfilePage() {
  return (
    <div className="container-fluid" style={{ height: "100vh", width: "100%" }}>
      <div className="row" style={{ height: "10vh" }}></div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 d-flex justify-content-center">
          <img
            className="img-fluid rounded-circle float-center"
            src="https://github.com/mdo.png"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6 d-flex justify-content-center">
          <h1>John Smith</h1>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
