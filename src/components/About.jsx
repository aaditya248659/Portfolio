import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
              I love creating digital experiences that are not only functional but also beautiful and intuitive.
            </p>
            <p className="about-description">
              With expertise in React, Node.js, and various databases, I have build some scalable applications. 
              I'm always eager to learn new technologies and take on 
              challenging projects that push the boundaries of what's possible.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>🚀 Full-Stack Development</h4>
                <p>Building end-to-end applications with modern technologies</p>
              </div>
              <div className="highlight-item">
                <h4>💡 Problem Solving</h4>
                <p>Creating innovative solutions for complex challenges</p>
              </div>
              <div className="highlight-item">
                <h4>🎨 UI/UX Focus</h4>
                <p>Designing intuitive and engaging user experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
