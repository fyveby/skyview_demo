import { useEffect } from "react";
function Videos() {
  useEffect(() => {
    const player1 = document.getElementById("p1");
    const player2 = document.getElementById("p2");
    const player3 = document.getElementById("p3");
    const player4 = document.getElementById("p4");
    setTimeout(() => {
      player1.play();
      player2.play();
      player3.play();
      player4.play();
    }, 1000);
  }, []);
  return (
    <div className="p-5 bg-body-tertiary rounded-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <video
            muted
            playsInline
            loop
            preload
            webkit-playsinline
            height={250}
            width={250}
            id="p1"
          >
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <video
            muted
            playsInline
            loop
            preload
            webkit-playsinline
            height={250}
            width={250}
            id="p2"
          >
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <video
            muted
            playsInline
            loop
            preload
            webkit-playsinline
            height={250}
            width={250}
            id="p3"
          >
            <source
              src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <video
            muted
            webkit-playsinline
            playsInline
            preload
            loop
            height={250}
            width={250}
            id="p4"
          >
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
