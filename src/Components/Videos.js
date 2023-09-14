function Videos() {
  return (
    <div className="p-5 bg-body-tertiary rounded-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <video controls height={250} width={250}>
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <video controls height={250} width={250}>
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <video controls height={250} width={250}>
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <video controls height={250} width={250}>
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
}
export default Videos;
