// Hero content and the introductory value statement.
function Home() {
  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="status-dot" /> Available for opportunities
          </p>
          <h1>
            Building digital
            <br />
            <em>experiences</em> that matter.
          </h1>
          <p className="hero-description">
            I'm Aaditya, a full-stack developer who turns complex problems
            into clean, thoughtful and reliable products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="text-link" href="#contact">
              Let's talk <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in India</span>
            <i />
            <span>Open to remote</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-sun">AP</div>
          <span className="floating-label label-top">Java / React</span>
          <span className="floating-label label-bottom">MERN • Spring</span>
          <div className="hero-grid" />
        </div>
      </section>
      <section className="intro-band">
        <div className="section-wrap intro-content">
          <span className="intro-number">01</span>
          <p>
            From the first line of code to the final pixel, I care about
            building things that are{" "}
            <strong>useful, usable and built to last.</strong>
          </p>
          <span className="intro-arrow">↓</span>
        </div>
      </section>
    </>
  );
}

export default Home;
