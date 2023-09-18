import React from "react";

function Unity() {
  return (
    <div
      className="d-flex border justify-content-center align-items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <iframe
        id="webgl_iframe"
        allow="autoplay; fullscreen; vr"
        allowFullScreen="false"
        src="https://play.unity.com/webgl/6a216d6f-d78c-478b-8a1f-eb38a4fdb291?screenshot=false&embedType=embed"
        width="810"
        height="640"
      ></iframe>
    </div>
  );
}

export default Unity;
