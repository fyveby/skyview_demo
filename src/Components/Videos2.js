import React from "react";
import { useEffect, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Loading from "./Loading";
import Video from "../Images/demo_video.mp4";

function Videos2() {
  // const [visStyle, setVisStyle] = useState({ visibility: "hidden" });
  // const [allLoaded, setAllLoaded] = useState(false);
  // let load = [false, false, false, false, false];
  // const videos = useRef([]);
  const videoRef = useRef();
  function handleCacheControl(url) {
    if (url.match(/\.data/) || url.match(/\.bundle/)) {
      return "must-revalidate";
    }
    if (url.match(/\.mp4/) || url.match(/\.wav/)) {
      return "immutable";
    }
    return "no-store";
  }

  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "Build/build.loader.js",
    dataUrl: "Build/build.data",
    frameworkUrl: "Build/build.framework.js",
    codeUrl: "Build/build.wasm",
    cacheControl: handleCacheControl,
  });
  const playVid = () => {
    videoRef.current.play();
  };
  useEffect(() => {
    const t = setTimeout(playVid, 5000);
    return () => {
      clearTimeout(t);
    };
  }, [isLoaded]);
  // useEffect(() => {
  //   const playFunct = () => {
  //     videos.current.forEach((video) => {
  //       if (video == null) {
  //         return;
  //       }
  //       setVisStyle({ visibility: "visible" });
  //       video.play();
  //     });
  //   };
  //   const timeoutID = setTimeout(playFunct, 2000);
  //   return () => {
  //     //get rid of timeout when component is unloaded
  //     clearTimeout(timeoutID);
  //   };
  // }, [allLoaded]);

  // useEffect(() => {
  //   loadOne(4);
  // }, [isLoaded]);

  // const loadOne = (elementNum) => {
  //   load[elementNum] = true;
  //   if (load[0] && load[1] && load[2] && load[3] && load[4]) {
  //     setAllLoaded(true);
  //   }
  // };

  return (
    <div
      className="container"
      style={{ visibility: isLoaded ? "visible" : "hidden" }}
    >
      <div className="row py-2">
        <h2 style={{ color: "#2B7DA3" }}>Digital Feed</h2>
      </div>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div>
          <Loading></Loading>
        </div>
      )}
      <div className="row">
        <Unity
          className="unity px-3 py-2 mx-auto"
          style={{ height: 500 }}
          unityProvider={unityProvider}
        />
      </div>
      <div className="row py-2">
        <h2 style={{ color: "#2B7DA3" }}>Camera Feed</h2>
      </div>
      <div className="row py-2 g-0">
        <div className="col-12">
          <video
            muted
            playsInline
            loop
            className="fill px-2 mx-auto"
            ref={videoRef}
            src={Video}
            type="video/mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Videos2;
