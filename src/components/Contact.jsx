import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a service like EmailJS or your backend API
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          Let's <span className="highlight">Connect</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-description">
              Drop me a mail or message me on LinkedIn. I'm always excited to discuss 
              new opportunities, collaborate on interesting projects, or just have a chat 
              about technology and development.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:aadityapathak18800@gmail.com" className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>aadityapathak18800@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/aadityap123" target="_blank" rel="noopener noreferrer" className="contact-method">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>
              
              <a href="https://github.com/aaditya248659" target="_blank" rel="noopener noreferrer" className="contact-method">
                <i className="fab fa-github"></i>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
