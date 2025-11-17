import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Transforming Concepts into Seamless User Experiences</span>
            </h1>
            <p className="hero-description">
              Hi! I'm <span className="name-highlight">Aaditya Pratyay Pathak</span>, a Full-Stack Developer based in Noida.
            </p>
            
            <div className="hero-buttons">
              <a href="/Resume.pdf" className="btn btn-primary" download>
                Download Resume
              </a>
              <div className="social-links">
                <a href="https://github.com/aaditya248659" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/aadityap123" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <p>I prioritize client collaboration, fostering open communication</p>
              </div>
              <div className="stat-item">
                <p>I'm very flexible with time zone communications</p>
              </div>
              <div className="stat-item">
                <p>Currently working on modern web applications with React and Node.js</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img src="/My_Photo1.jpeg" alt="Aaditya Pratyay Pathak" className="hero-profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
