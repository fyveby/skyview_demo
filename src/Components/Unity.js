import React from "react";

function Unity() {
  return (
    <div
      className="d-flex border justify-content-center align-items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <iframe
        id="webgl_iframe"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        allowfullscreen="false"
        allowvr=""
        mozallowfullscreen="true"
        src="https://play.unity.com/webgl/6a216d6f-d78c-478b-8a1f-eb38a4fdb291?screenshot=false&embedType=embed"
        width="810"
        height="640"
        onmousewheel=""
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Unity;
