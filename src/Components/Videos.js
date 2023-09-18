import { useEffect, useState } from "react";
import Loading from "./Loading";

function Videos() {
  const [allLoad, setAllLoad] = useState(false);
  let p1 = false;
  let p2 = false;
  let p3 = false;
  let p4 = false;
  useEffect(() => {
    const playFunct = () => {
      const player1 = document.getElementById("p1");
      const player2 = document.getElementById("p2");
      const player3 = document.getElementById("p3");
      const player4 = document.getElementById("p4");
      player1.play();
      player2.play();
      player3.play();
      player4.play();
    };
    const timeoutID = setTimeout(playFunct, 1500);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [allLoad]);
  return (
    <div className="fill">
      {!allLoad && <Loading></Loading>}

      <div className="rounded-3 fill">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <video
              muted
              playsInline
              loop
              height={250}
              width={250}
              id="p1"
              onCanPlayThrough={() => {
                p1 = true;
                if (p1 === true && p2 === true && p3 === true && p4 === true) {
                  setAllLoad(true);
                }
              }}
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
              height={250}
              width={250}
              id="p2"
              onCanPlayThrough={() => {
                p2 = true;
                if (p1 === true && p2 === true && p3 === true && p4 === true) {
                  setAllLoad(true);
                }
              }}
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
              height={250}
              width={250}
              id="p3"
              onCanPlayThrough={() => {
                p3 = true;

                if (p1 === true && p2 === true && p3 === true && p4 === true) {
                  setAllLoad(true);
                }
              }}
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
              height={250}
              width={250}
              id="p4"
              onCanPlayThrough={() => {
                p4 = true;

                if (p1 === true && p2 === true && p3 === true && p4 === true) {
                  setAllLoad(true);
                }
              }}
            >
              <source
                src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Videos;
