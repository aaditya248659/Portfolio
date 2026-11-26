import { useState } from "react";

// Site-wide navigation uses anchors so every section remains on one page.
function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">AP</span>
        <span>Aaditya<span className="brand-dot">.</span></span>
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
      >
        {open ? "×" : "☰"}
      </button>
      <nav
        id="site-navigation"
        className={open ? "site-nav is-open" : "site-nav"}
      >
        {[
          ["About", "#about"],
          ["Skills", "#skills"],
          ["Projects", "#projects"],
          ["Journey", "#journey"],
          ["Contact", "#contact"],
        ].map(([label, path]) => (
          <a key={label} href={path} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#contact"
          onClick={closeMenu}
        >
          Let's Talk <span>↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
