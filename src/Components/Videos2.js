import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Loading from "./Loading";

function Videos2() {

    function handleCacheControl(url) {
        if (url.match(/\.data/) || url.match(/\.bundle/)) {
          return "must-revalidate";
        }
        if (url.match(/\.mp4/) || url.match(/\.wav/)) {
          return "immutable";
        }
        return "no-store";
      }
    
    const { unityProvider, isLoaded,  } = useUnityContext({
        loaderUrl: "build/WebGLButtonNC.loader.js",
        dataUrl: "build/WebGLButtonNC.data",
        frameworkUrl: "build/WebGLButtonNC.framework.js",
        codeUrl: "build/WebGLButtonNC.wasm",
        cacheControl: handleCacheControl,
      });
  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <Loading></Loading>
        </div>
      )}
      <div className="row py-2"><h2 style={{color: '#2B7DA3'}}>Digital Feed</h2></div>
      <div className="row">
      <Unity className="unity px-3 py-2 mx-auto" style={{height:500}} unityProvider={unityProvider} />
      </div>
      <div className="row py-2"><h2 style={{color: '#2B7DA3'}}>Live Camera Feed</h2></div>
      <div className="row py-2 g-0">
        <div className="col-lg-6">
        <video
              muted
              playsInline
              loop
              autoPlay={true}
              className="fill px-2 mx-auto"
              id="p1"
              >
                <source
                src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
                type="video/mp4"
              ></source>
              </video>
        </div>
        <div className="col-lg-6">
        <video
              muted
              playsInline
              loop
              autoPlay={true}
              className="fill px-2 mx-auto"
              id="p1">
                <source
                src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
                type="video/mp4"
              ></source>
              </video>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6">
        <video
              muted
              playsInline
              loop
              autoPlay={true}
              className="fill px-2 mx-auto"
              id="p1">
                <source
                src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
                type="video/mp4"
              ></source>
              </video>
        </div>
        <div className="col-lg-6">
        <video
              muted
              playsInline
              loop
              autoPlay={true}
              className="fill px-2 mx-auto"
              id="p1">
                <source
                src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4"
                type="video/mp4"
              ></source>
              </video>
        </div>
      </div>
    </div>
  )
}

export default Videos2
