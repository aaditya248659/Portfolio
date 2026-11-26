// Shared footer links and external profile shortcuts.
function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">AP</span>
          <span>
            Aaditya<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Designed &amp; built with intention.</p>
        <div className="social-links">
          <a
            href="https://github.com/aaditya248659"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaditya-pathak/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:aadityapratyaypathak@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
