// The portfolio is intentionally composed as one scrollable landing page.
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <div className={`site-shell${isLoading ? " is-loading" : ""}`}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
