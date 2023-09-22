function Loading() {
  return (
    <div
      className="text-center fill"
      style={{ backgroundColor: "white", width: "100%" }}
    >
      <div className="spinner-border spinner" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export default Loading;
