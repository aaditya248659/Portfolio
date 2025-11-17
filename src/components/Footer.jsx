import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>Copyright &copy; {currentYear} Aaditya Pathak. All rights reserved.</p>
          </div>
          
          {/* <div className="footer-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div> */}
        </div>
        
        <div className="footer-nav">
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            About
          </button>
          <button onClick={() => document.getElementById('tech-stack').scrollIntoView({ behavior: 'smooth' })}>
            Tech Stack
          </button>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </button>
          <button onClick={() => document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' })}>
            Certificates
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
