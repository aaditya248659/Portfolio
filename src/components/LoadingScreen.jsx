function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading portfolio">
      <div className="loader-mark">AP</div>
      <div className="loader-track">
        <span />
      </div>
      <p>Loading Experience</p>
    </div>
  );
}

export default LoadingScreen;
