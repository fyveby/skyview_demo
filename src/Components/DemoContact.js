import DemoNav from "./DemoNav";
function DemoContact() {
  return (
    <DemoNav
      content={
        <div
          className="row d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%" }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdPjO4k40MhOHnIl4YK0Bw1X1Jo7AixbmGnzViF--wSh-TivA/viewform?embedded=true"
              title="Contact"
              style={{ width: "200%", height: "100%" }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      }
    ></DemoNav>
  );
}

export default DemoContact;
