import React from "react";

function Unity() {
  return (
    <div
      className="d-flex  justify-content-center align-items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      
      <iframe style={{ width: "90%", height: "85%" }}
        id="webgl_iframe"
        allow="autoplay; fullscreen; vr"
        allowfullscreen="false"
        allowvr=""
        mozallowfullscreen="true"
        src="https://i.simmer.io/@rinkyfulwani/fyveby"
        onmousewheel=""
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Unity;
